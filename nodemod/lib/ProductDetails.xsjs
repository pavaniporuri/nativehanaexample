var body = '';
var conn;
var pstmt_prd_details;

try
{
	
var prodid = $.request.parameters.get('productid');
var prodname = $.request.parameters.get('productname');

conn = $.db.getConnection();

var query = 'UPDATE  "Z_NATIVE_HANA_EXERCISES.db::ProductDetails" SET "PRODNAME" = '+ "'"+prodname+"'"+ 'where "PRODID" ='+ prodid;

pstmt_prd_details = conn.prepareStatement(query);

pstmt_prd_details.executeUpdate();

conn.commit();
conn.close();

body += 'Product details updated!';
}

catch(e)
{
	body += "---"+e.toString()+"-----";		
}

$.response.contentType = "application/json";   
$.response.setBody(body);
$.response.status = $.net.http.OK;
