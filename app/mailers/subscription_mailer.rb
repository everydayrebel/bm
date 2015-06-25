class SubscriptionMailer < ApplicationMailer
	def send_email(email, post)
		@post = post
		mail subject: "test",
			to: "stipo.josipovic@gmail.com",
			from: "nothing@briskmornings.com"
	end
end
