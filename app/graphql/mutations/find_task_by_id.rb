module Mutations
    class FindTaskById < Mutations::BaseMutation
      argument :id, ID, required: true
  
      field :success, Boolean, null: false
      field :errors, [String], null: false
  
      def resolve(id:)
        task = Task.find_by(id: id)
  
        if task.nil?
          return { success: false, errors: ["Task not found"] }
        end

        return { success: true, task: task }
      end
    end
  end