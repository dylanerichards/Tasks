# frozen_string_literal: true

module Types
  class QueryType < Types::BaseObject
    field :task, Types::TaskType, null: false do
      argument :id, ID, required: true
    end

    def task(id:)
      Task.find(id)
    end

  end
end
