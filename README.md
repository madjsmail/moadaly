# Moadaly معدلي

محاكي حساب المعدل لطلبة نظام ل.م.د تخصص رياضيات وإعلام آلي
يستعمل لكل الجامعات التي تتابع نفس المنهاج لميدان الرياضيات والإعلام الآلي في الجزائر،

* فيه قسم  خاص بتخصصات الماستر في الإعلام الآلي بالبويرة،

Try it : [moadaly-WebApp](https://moadaly.vercel.app)

See Moadaly android app : [moadaly-App](https://github.com/tarek-berkane/moadaly_v2)



## Moadaly

* is a web application that allow you to calculate your pass marks. The app is for computer science student " LMD "   
* تطبيق ويب لحساب المعدل الفصلي و السنوي للسنة الأولى  رياضيات وإعلام آلي وسنوات إعلام آلى   نظام [LMD] الجزائر 
* [التخصصات المدعومة حاليا](docs/canevas_summary.md)

## Summary

* **Issues** : Testing is much appreciated. Please post any issue you find in the [Issue tracker](https://github.com/Abdelmadjidsmail/moadaly/issues).

* **Authors** : [authors](docs/authors.md)

* **Built With**: 

  * [HTML/CSS]

  * [bootstrap/shards] -the  css framework  used 
  * [jquery ]   - java script framework

* See our design : [design](https://github.com/Sho-Oter/dynamic-grade-average-calculator)

* See  : [SourceCode](https://github.com/madjsmail/moadaly)

## Contribution

* Adapt this app for more specialities (ST, SM, etc..)

### How to create a new canvas

For example a new level named "L3ML"


1. Make a copy of canevas/templates/L1Info.json  as L3ML.json
2. Modify the JSON file as you need.
3. copy the file into : canevas/json-pure/L3ML.json
4. Re-build canevas_data.js using, requires pyhton:

 ```sh
    make build_data
 ```

5. Test if it works
6. The menu must be updated automatically

## Tools

* 'tools/validate_json.py': check json file schema from [canevas/json-pure](canevas/json-pure)

  ```sh
  make validate
  ```

* 'tools/summary_md.py': generate details about available canevas: [docs/summary_canevas.md](docs/summary_canevas.md ) 

  ```sh
  make summary
  ```

* 'tools/convert_json.py': generate js data file to be used in offline html page: [canevas/canevas_data.js](canevas/canevas_data.js)

  ```sh
  make build_data
  ```

  



