class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true
  include ActionController::Cookies
end
