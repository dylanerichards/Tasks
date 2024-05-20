module Mutations
    class CreateTask < Mutations::BaseMutation
      argument :title, String, required: true
      argument :description, String, required: true
      argument :completed, Boolean, required: true
      argument :due_date, String, required: true
  
      # Define the return fields for the mutation
      field :task, Types::TaskType, null: false
      field :errors, [String], null: false
  
      def resolve(title:, description:, completed:, due_date:)
        task = Task.new(title: title, description: description, completed: completed, due_date: due_date)
  
        if task.save
          {
            task: task,
            errors: []
          }
        else
          {
            task: nil,
            errors: task.errors.full_messages
          }
        end
      end
    end
  end