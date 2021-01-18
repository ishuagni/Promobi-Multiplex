class SeatsController < ApplicationController
  before_action :set_seat, only: [:show, :update, :destroy]

  # GET /seats
  def index
    if params[:slot_id]
      slot = Slot.find(params[:slot_id]) 
      @seats = slot.seat.order(created_at: :asc)

      seats_count = @seats.length
      data = []

      # Processing Data
      temp_data = []
      temp_counter = -1
      seats_count.times do |counter|
        temp_counter += 1

        if temp_counter == 15
          temp_counter = 0
          data.append(temp_data)
          temp_data = []
        end

        temp_data.append(@seats[counter])
      end

      data.append(temp_data)
      render json: data
    else
      render json: {"error": "Slot id is not provided!"}, status: :bad_request
    end
  end

  # GET /seats/1
  def show
    render json: @seat
  end

  # POST /seats
  def create
    @seat = Seat.new(seat_params)

    if @seat.save
      render json: @seat, status: :created, location: @seat
    else
      render json: @seat.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /seats/1
  def update
    if @seat.update(seat_params)
      render json: @seat
    else
      render json: @seat.errors, status: :unprocessable_entity
    end
  end

  # PUT /seats/book_seats
  def book_seats
    if params[:seats] && params[:price]

      @updated_seats = []
      params[:seats].each do |s|
        seat = Seat.find(s)
        seat.update(owned_by: current_user.id)
        @updated_seats.append(seat)
      end

      Report.create!(
        email: current_user.email, 
        seats: params[:seats].count,
        price: params[:price],
        movie: @updated_seats[0].slot.screen.movie.name)

      render json: @updated_seats, status: :created
    else
      render json: @seat.errors, status: :unprocessable_entity
    end
  end

  # DELETE /seats/1
  def destroy
    @seat.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_seat
      @seat = Seat.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def seat_params
      params.require(:seat).permit(:name, :price, :position, :owned_by, :slot_id)
    end
end
