//importing express here
const express= require('express');
//importing router here
const router= express.Router();
//then using router property for reading url
router.get('/',(req,res,next) =>
{
  //getting parameter here
  var name = req.param('name');
  var text1="1";
  var text="Hello "+name;
  if (name) {
  res.end(JSON.stringify(
                          { id:1,
                            content:text
                          }
                        )
          );
  }else{
        res.end(JSON.stringify(
                                { id:1,
                                  content:"Hello World"
                                }
                              ));
        }
});
module.exports=router;
