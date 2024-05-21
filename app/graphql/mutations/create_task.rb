module Mutations
    class CreateTask < Mutations::BaseMutation
      argument :title, String, required: true
      argument :description, String, required: false
      argument :completed, Boolean, required: false
      argument :due_date, String, required: false
  
      # Define the return fields for the mutation
      field :task, Types::TaskType, null: false
      field :errors, [String], null: false
  
      def resolve(title:, description:, completed:, due_date:)
        p "##################"
        p "##################"
        p "##################"
        p "##################"
        p title
        p description
        p completed
        p due_date
        p "##################"
        p "##################"
        p "##################"
        p "##################"

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