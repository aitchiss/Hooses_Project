class CompletedJobsController < ApplicationController

  def index

    jobs = CompletedJob.where({:house_id => params[:id]})

    render json: jobs
  end

end
