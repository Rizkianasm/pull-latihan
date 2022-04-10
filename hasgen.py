s = input()

def hashtagGen(text):
	#your code goes here
	gen = s.replace(" ", "")
	return "#"+ gen

print(hashtagGen(s))