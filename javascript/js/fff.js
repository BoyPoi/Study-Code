var book={
			_year=2004,
			edition:1
			};
Object.defineProperty(book,"year",{
							get:function(){
								return:this_year;
										}
set:function(newValue){
if(newValue>2004){this._year=newValue;
this.edition+=newValue-2004;}
}
});
book.year=2005;
alert(book._year);
alert(book.edition);