class MoviesController < ApplicationController
  before_action :set_movie, only: [:show, :update, :destroy]

  # GET /movies
  def index
    @movies = Movie.all
    @user = current_user

    render json: { 'movies': @movies, 'user': { 'name': @user.name, 'email': @user.email, 'role': @user.role } }
  end

  # GET /movies/1
  def show
    render json: @movie
  end

  # POST /movies
  def create
    puts params

    if params[:movie] && params[:screens] && params[:slots] && params[:seatsPerScreen]
      begin
        @movie = Movie.create!(movie_params)
        
        params[:screens].to_i.times do |scr|
          screen = @movie.screen.create!(name: "S#{scr+1}")

          params[:slots].times do |slot|
            slot = screen.slot.create!(slot_time: "#{SLOT_TIME[slot]}")

            params[:seatsPerScreen].times do |seat|
              seat_position = ((seat)/15)/3
              seat_section = (seat)/15
              seat_number = (seat)%15

              seat = slot.seat.create!(name: "#{(65+seat_section).chr}#{seat_number+1}",
                price: SEATS_PRICES[seat_position], position: seat_position)
            end
          end
        end

        render json: @movie, status: :created, location: @movie

      rescue Exception => e 
        render json: {"error": e.message}, status: :unprocessable_entity
      end
    else
      render json: {"error": 'Need more params'}, status: :unprocessable_entity
    end 
  end

  # PATCH/PUT /movies/1
  def update
    if @movie.update(movie_params)
      render json: @movie
    else
      render json: @movie.errors, status: :unprocessable_entity
    end
  end

  # DELETE /movies/1
  def destroy
    @movie.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_movie
      @movie = Movie.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def movie_params
      params.require(:movie).permit(:name, :movie_time, :rating)
    end
end
