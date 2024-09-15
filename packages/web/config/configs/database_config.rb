# frozen_string_literal: true
class DatabaseConfig < ApplicationConfig
  config_name "SST_RESOURCE"
  attr_config :cluster_arn, :database, :host, :password, :port, :postgres, :secret_arn, :type, :username

  coerce_types port: :integer

  def postgres=(value)
    JSON.parse(value).each do |key, value|
      send("#{key.underscore}=", value)
    end
  end

  def url
    "postgres://#{username}:#{password}@#{host}:#{port}/#{database}"
  end
end
