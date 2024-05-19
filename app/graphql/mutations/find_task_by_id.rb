module Mutations
    class FindTaskById < Mutations::BaseMutation
      argument :id, ID, required: true
  
      field :success, Boolean, null: false
      field :errors, [String], null: false
  
      def resolve(id:)
        p "RESOLVINGGGGGG"
        task = Task.find_by(id: id)
  
        if task.nil?
          return { success: false, errors: ["Task not found"] }
        end

        return { success: true, task: task }
      end
    end
  end
  
#   curl -X POST http://localhost:3000/graphql \
#   -H "Content-Type: application/json" \
#   -d '{
#     "query": "query FindTaskById($id: ID!) { task(id: $id) { id title description completed } }",
#     "variables": {
#       "id": "4"
#     }
#   }'
