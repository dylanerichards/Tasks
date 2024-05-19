# frozen_string_literal: true

module Types
  class MutationType < Types::BaseObject
    field :create_task, mutation: Mutations::CreateTask
    field :update_task, mutation: Mutations::UpdateTask
    field :delete_task, mutation: Mutations::DeleteTask

    field :find_task_by_id, mutation: Mutations::FindTaskById
  end
end
