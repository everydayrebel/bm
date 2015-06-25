class StaticController < ApplicationController
	def show
		@subscriber = Subscriber.new
		render params[:page]
	end
end
