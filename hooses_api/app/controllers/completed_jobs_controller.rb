class CompletedJobsController < ApplicationController

  def index

    jobs = CompletedJobs.where({:house_id => params[:id]})

    render json: jobs
  end

end
