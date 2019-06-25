class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(params[:user][:username], params[:user][:password])

        if @user
            login(@user)
            render :show
        else
            render json: ["Invalid credentials"], status: 401
        end
    end

    def destroy
        @user = current_user
        
        if @user
            logout
            render {}
        else
            render json: ["You are not currently logged in"], status: 404
        end
    end
    
end