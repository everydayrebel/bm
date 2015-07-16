class StaticController < ApplicationController
	def show
		@subscriber = Subscriber.new
		render :index
	end
end
