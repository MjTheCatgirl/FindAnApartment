class ApartmentsController < ApplicationController
  before_action :set_apartment, only: [:show, :edit, :update, :destroy]

  # GET /apartments
  # GET /apartments.json
  def index
    render json: Apartment.all
  end

  # GET /apartments/1
  # GET /apartments/1.json
  def show
  end

  # GET /apartments/new
  def new
    @apartment = Apartment.new
  end

  # GET /apartments/1/edit
  def edit
  end

  # POST /apartments
  # POST /apartments.json
  def create
    apartment = Apartment.create(apartment_params)
    render json: apartment
  end

  # PATCH/PUT /apartments/1
  # PATCH/PUT /apartments/1.json
  def update
    apartment = Apartment.find(params[:id])
    apartment.update_attributes(apartment_params)
    render json: apartment
  end

  # DELETE /apartments/1
  # DELETE /apartments/1.json
  def destroy
    Apartment.destroy(params[:id])
  end

  private

    # Never trust parameters from the scary internet, only allow the white list through.
    def apartment_params
      params.require(:apartment).permit(:id, :address, :city, :state, :bedrooms, :bathrooms)
    end
end
