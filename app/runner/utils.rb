class Utils

	def self.updateConfig(original, source)
	
		source.keys.each do |key|
			value = source[key]
			if original.include?(key)
				if value.class != original[key].class  
					# merging in this case wouldn't make sense
					raise 'merging incompatible hashes'
				elsif value.class == Hash 
					# hashes get merged recursively
					updateConfig(original[key], value)
				else
					# other values get overwritten
					original[key] = value
				end
			else
				# original doesn't contain this key yet, merging is easy
				original[key] = value
			end
		end
		
	end

end