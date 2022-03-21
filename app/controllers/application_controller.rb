class ApplicationController < ActionController::Base
  before_action :authenticate_user!, unless: :devise_controller?

  helper_method :current_company

  def redirect_to(target, *args, **kwargs)
    if kwargs[:notice].present?
      up.emit('flash:notice', content: render_flash(kwargs[:notice]))
    end

    super
  end

  private

  def current_company
    @current_company ||= current_user.company if user_signed_in?
  end

  def render_flash(message)
    render_to_string("layouts/_flash_message", locals: { message: message }, layout: false)
  end
end
