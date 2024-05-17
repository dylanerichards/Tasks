module Mutations
    class UpdateTask < Mutations::BaseMutation
      argument :id, ID, required: true
      argument :title, String, required: false
      argument :description, String, required: false
      argument :completed, Boolean, required: false
  
      field :task, Types::TaskType, null: false
      field :errors, [String], null: false
  
      def resolve(id:, title: nil, description: nil, completed: nil)
        task = Task.find_by(id: id)
        return { task: nil, errors: ["Task not found"] } unless task
  
        task.title = title if title.present?
        task.description = description if description.present?
        task.completed = completed unless completed.nil?
  
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