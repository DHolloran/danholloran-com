desc "Check all external links"
task :check_links do
  require 'link_checker'
  LinkChecker.new(
		:target => '_site',
    :options => { :no_warnings => true }
	).check_uris
end
