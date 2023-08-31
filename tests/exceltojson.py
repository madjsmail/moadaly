#!/usr/bin/env python
# -*- coding: utf-8 -*-
#
#  exceltojson.py
#  
#  Copyright 2023 zerrouki <zerrouki@majd4>
#  
#  This program is free software; you can redistribute it and/or modify
#  it under the terms of the GNU General Public License as published by
#  the Free Software Foundation; either version 2 of the License, or
#  (at your option) any later version.
#  
#  This program is distributed in the hope that it will be useful,
#  but WITHOUT ANY WARRANTY; without even the implied warranty of
#  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
#  GNU General Public License for more details.
#  
#  You should have received a copy of the GNU General Public License
#  along with this program; if not, write to the Free Software
#  Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston,
#  MA 02110-1301, USA.
#  
#  
import sys
import json
import argparse
import pprint
def grabargs():
    """
    Extract args
    """
    parser = argparse.ArgumentParser(description='Convert CSV format into json.')
    # add file name to import and filename to export
    
    parser.add_argument("-f", dest="filename", required=True,
    help="input file to convert", metavar="FILE")
    
    parser.add_argument("-o", dest="outfile", required=False,
    help="Output file to convert", metavar="OUT_FILE")
    
    parser.add_argument("--all", type=bool, nargs='?',
                        const=True, 
                        help="Test all.")
    args = parser.parse_args()
    return args
    
def load_csv(lines):
    """
    Convert lines into canvevas json
    """
    data = {}
    for num, line in enumerate(lines):
        line = line.strip("\n")
        if line.startswith("#"):
            continue
        fields = line.split("\t")
        #name   semestre    unite   unite_type  module  credit  coef    td  tp  exam
        if len(fields) >= 10:
            name,semestre,unite, unite_type = fields[0], fields[1], fields[2], fields[3]
            # create if not exists
            if not data.get("name",''):
                data["name"] = name
            # create if not exists
            if semestre == "S1":
                semestre = "semestre1"
                sem_name = "S1"
            else:
                semestre = "semestre2"
                sem_name = "S2"                
            if not semestre in data:
                data[semestre] = {"name":sem_name, 
                   "moy":0,
                  "coef":0,
                  "credits_origine":0,
                  "credits":0,
                "unites":{}}
            # create if not exists                
            if not unite in data[semestre]["unites"]:
                data[semestre]["unites"][unite] = {"name": unite,
                    "title":unite_type, 
                    "coef":0,
                    "credit":0,
                    "credits_origine":0,
                    "moy":0,
                    "modules":[]}
            # add module
            module_name = fields[4]
            try:
                credit,coef,td, tp,exam =  int(fields[5]), int(fields[6]), int(fields[7]), int(fields[8]), int(fields[9])
            except:
                print("Error on line num:",num)
                print(line)
                sys.exit()
            moduledict = {"name":module_name,
                  "title":module_name,
                  "coef":coef,
                  "credit":credit,
                  "poids":[
                     exam,
                     td,
                     tp
                  ],
                  "poids_tp":tp/100,
                  "poids_td":td/100,
                  "poids_exam":exam/100,
                  "moy":0
               }
            data[semestre]["unites"][unite]["modules"].append(moduledict)
            data[semestre]["unites"][unite]["coef"] += coef
            data[semestre]["unites"][unite]["credits_origine"] += credit
    # ajust unites into list instead of dict
    data["semestre1"]['unites'] = list(data["semestre1"]['unites'].values())
    data["semestre2"]['unites'] = list(data["semestre2"]['unites'].values())
    return data
def main(args):
    """
    
    """
    
    args = grabargs()
    filename = args.filename
    try:
        fl = open(filename, encoding="utf-8")
    except:
        print("Can't open file ", filename)
        sys.exit()
    lines = fl.readlines()
    data = load_csv(lines)
    # ~ print(json.dumps(data, ensure_ascii=False))
    # ~ pprint.pprint(json.dumps(data, ensure_ascii=False, indent=4))
    print(json.dumps(data, ensure_ascii=False, indent=2))
    return 0

if __name__ == '__main__':
    import sys
    sys.exit(main(sys.argv))
