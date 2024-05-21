# frozen_string_literal: true

module Types
  class QueryType < Types::BaseObject
    field :task, Types::TaskType, null: false do
      argument :id, ID, required: true
    end

    field :tasks, [Types::TaskType], null: false

    def task(id:)
      Task.find(id)
    end

    def tasks
      Task.order(completed: :asc, due_date: :asc)
    end

  end
end
