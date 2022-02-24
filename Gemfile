source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby "3.0.2"

gem "rails", "~> 7.0.2", ">= 7.0.2.2"
gem "sqlite3", "~> 1.4"
gem "puma", "~> 5.0"
gem "simple_form"

gem "cssbundling-rails"
gem "jsbundling-rails"
gem "sprockets-rails"
gem "turbo-rails"
gem "stimulus-rails"

group :development, :test do
  gem "debug", platforms: %i[ mri mingw x64_mingw ]
end

group :development do
  gem "web-console"
  gem "rack-mini-profiler"
end

group :test do
  gem "capybara"
  gem "selenium-webdriver"
  gem "webdrivers"
end
