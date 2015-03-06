# Qlik sample extensions for embedding CartoDB maps

CartoDB maps can be embedded in QlikView and Qlik Sense. While the integration typically works on a per-user-case basis, basic integration is really easy to achieve. This repo includes the source code for a handful of basic extensions for both QlikView and Qlik Sense that can be used as the foundation of a more complex integration of CartoDB in any of these two Qlik products.

## QlikView

### Basic viewer

![](https://github.com/CartoDB/labs-qlik/blob/master/qlikview/assets/viewer.png)

Simple extension that allows you to embed a CartoDB visualization in QlikView. Once the extension is instantiated, you just need to set the URL for the vis.json of the visualization in CartoDB in the corresponding field.

### Viewer with selector

![](https://github.com/CartoDB/labs-qlik/blob/master/qlikview/assets/selector.png)

This extension allows you to embed a CartoDB visualization in QlikView and control the data that is displayed by a native QlikView selector. Once the extension and the selector are instantiated, you just need to set the URL for the vis.json of the visualization in CartoDB, the ID of the QlikView selector, the table name and the table field name in the corresponding fields. SQL queries to CartoDB will be of the form: `select * from <table_name> where <field_name> in (<selection_in_qlik>)`

## Qlik Sense

### Basic viewer

![](https://github.com/CartoDB/labs-qlik/blob/master/qliksense/assets/viewer.png)

Simple extension that allows you to embed a CartoDB visualization in Qlik Sense. Once the extension is instantiated, you just need to set the URL for the vis.json of the visualization in CartoDB in the corresponding field.

### Viewer with selector

![](https://github.com/CartoDB/labs-qlik/blob/master/qliksense/assets/selector.png)

This extension allows you to embed a CartoDB visualization in Qlik Sense and control the data that is displayed by a native Qlik Sense selector. Once the extension and the selector are instantiated, you just need to set the URL for the vis.json of the visualization in CartoDB, the table name and the table field name in the corresponding fields. SQL queries to CartoDB will be of the form: `select * from <table_name> where <field_name> in (<selection_in_qlik>)`

