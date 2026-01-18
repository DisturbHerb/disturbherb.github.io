+++
title = '{{ replace .File.ContentBaseName "-" " " | title }}'
date = '{{ .Date }}'

[params]
    fullName = string
    species = string
    age = string
    dob = string
    bloodType = string
    height = string
    weight = string
    eyes = string
    hair = string
    nationality = string
    birthplace = string
    residence = string

    doe = 2053-01-01
    loyalty = 0
    occupation = string
    assignment = string
    languages = string

    supplemental = "blah blah blah"
    
    [[externalLink]]

+++
