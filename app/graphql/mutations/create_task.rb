module Mutations
    class CreateTask < Mutations::BaseMutation
      argument :title, String, required: true
      argument :description, String, required: true
      argument :completed, Boolean, required: true
  
      # Define the return fields for the mutation
      field :task, Types::TaskType, null: false
      field :errors, [String], null: false
  
      def resolve(title:, description:, completed:)
        task = Task.new(title: title, description: description, completed: completed)
  
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