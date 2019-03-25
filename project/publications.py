import csv

with open('publications.tsv') as pubs:
    data = csv.reader(pubs, delimiter='\t')
    for row in data:
        print("{}. ({}). *{}*, {} {}\n".format(row[1], row[2], row[3], row[4], row[7]))
