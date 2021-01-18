require "test_helper"

class ScreensControllerTest < ActionDispatch::IntegrationTest
  setup do
    @screen = screens(:one)
  end

  test "should get index" do
    get screens_url, as: :json
    assert_response :success
  end

  test "should create screen" do
    assert_difference('Screen.count') do
      post screens_url, params: { screen: { movie_id: @screen.movie_id, name: @screen.name, slot: @screen.slot } }, as: :json
    end

    assert_response 201
  end

  test "should show screen" do
    get screen_url(@screen), as: :json
    assert_response :success
  end

  test "should update screen" do
    patch screen_url(@screen), params: { screen: { movie_id: @screen.movie_id, name: @screen.name, slot: @screen.slot } }, as: :json
    assert_response 200
  end

  test "should destroy screen" do
    assert_difference('Screen.count', -1) do
      delete screen_url(@screen), as: :json
    end

    assert_response 204
  end
end
