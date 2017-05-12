class UsersController < ApplicationController

  def index

    users = User.all

    render json: users.as_json({

      except: [:created_at, :updated_at],

      include: {

        profiles: {
          only:[:first_name, :last_name, :address, :image]
        },
        owner_groups: {

          except: [:created_at, :updated_at, :user_id],

          include: {
            house: {
              only: [:address, :post_code]
            }
          }
        }
      }
      })

  end
end