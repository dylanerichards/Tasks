# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end


Task.create(
    title: "Rescue Brandon's Car",
    description: "Get Brandon's car out of the tow yard.",
    due_date: Date.today + 10.days,
    completed: false,
)

Task.create(
    title: "Restore Brandon's Registration",
    description: "Call registration broker to negotiate a less expensive premium.",
    due_date: Date.today + 20.days,
    completed: false,
)

Task.create(
    title: "Get Bagels",
    description: "Go to Knickerbocker Bagel and order some bagels",
    due_date: Date.today + 30.days,
    completed: false,
)