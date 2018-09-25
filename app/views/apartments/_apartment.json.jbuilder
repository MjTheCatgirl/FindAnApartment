json.extract! apartment, :id, :address, :city, :state, :bedrooms, :bathrooms, :created_at, :updated_at
json.url apartment_url(apartment, format: :json)
