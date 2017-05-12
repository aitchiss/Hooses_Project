class UsersController < ApplicationController

  def index

    users = User.all
    render json: users.as_json({

      except: [:created_at, :updated_at],

      include: {

        profiles: {
          only:[:first_name, :last_name, :address, :image]
        }
      }
      })
  end

  def show
    user = User.find(params[:id])
    render json: user.as_json({

          except: [:created_at, :updated_at],

          include: {

            profiles: {
              only:[:first_name, :last_name, :address, :image]
            }
          }
          })

end










    # ownerGroup = OwnerGroup.where({ :user_id => params[:id] })

    # coOwners = []

    # for owner in ownerGroup 
    #   ownedHouses = OwnerGroup.where({:house_id => owner[:house_id]})
    #   for ownedhouse in ownedHouses
    #     foundUser = User.find(ownedhouse[:user_id])

    #     hashy = {
    #       house_id: ownedhouse[:house_id],
    #       user: foundUser
    #     }

    #     coOwners.push(hashy)
    #   end
    # end

    # grouped_owners = coOwners.group_by {|owner| owner[:house_id]}

    # render json: user.as_json

    # render json: user.as_json({

    #   except: [:created_at, :updated_at],

    #   include: {

    #     profiles: {
    #       only:[:first_name, :last_name, :address, :image]
    #     },
    #     owner_groups: {

    #       except: [:created_at, :updated_at, :user_id],

    #       include: {
    #         house: {
    #           only: [:address, :post_code]
    #         }
    #       }
    #     }
    #   }
    #   })

end