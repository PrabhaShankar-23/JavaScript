const filter_dict = {
     "degrees": {
                "heading": "Degree",
                "data": [
                    {
                        "id": 10.0,
                        "name": "BA"
                    }
                ],
                "type": "autocomplete",
                "key": "degree"
            },
            "courses": {
                "heading": "Course",
                "data": [
                    {
                        "id": 36.0,
                        "name": "ECE"
                    }
                ],
                "type": "autocomplete",
                "key": "course"
            },
            "batch": {
                "heading": "Batch",
                "data": [
                    {
                        "id": 2021,
                        "name": 2021
                    }
                ],
                "type": "autocomplete",
                "key": "batch"
            },
            "cgpa": {
                "heading": "CGPA",
                "data": [
                    {
                        "name": 5.0
                    },
                    {
                        "name": 6.7
                    }
                ],
                "type": "manual",
                "key": "cgpa"
            },
            "status": {
                "heading": "Status",
                "data": [
                    {
                        "name": "ACTIVE"
                    },
                    {
                        "name": "INACTIVE"
                    }
                ],
                "type": "autocomplete",
                "key": "student_status"
            }
    };

const disable_filter = {           
               "degrees": {
                "heading": "Degree",
                "data": [
                    {
                        "id": 10,
                        "name": "Master of Mangology"
                    }
                ],
                "type": "autocomplete",
                "key": "degree"
            },
            "courses": {
                "heading": "Course",
                "data": [
                    {
                        "id": 36,
                        "name": "Mango Design"
                    }
                ],
                "type": "autocomplete",
                "key": "course"
            },
            "batch": {
                "heading": "Batch",
                "data": [
                    {
                        "id": {
                            "id": 2021,
                            "name": 2021
                        },
                        "name": {
                            "id": 2021,
                            "name": 2021
                        }
                    }
                ],
                "type": "autocomplete",
                "key": "batch"
            },
            "cgpa": {
                "heading": "CGPA",
                "data": [
                    {
                        "cgpa_min": "1"
                    },
                    {
                        "cgpa_max": "10"
                    }
                ],
                "type": "manual",
                "key": "cgpa"
            },
            "status": {
                "heading": "Status",
                "data": [
                    {
                        "name": "ALL"
                    }
                ],
                "type": "autocomplete",
                "key": "student_status"
            }
        };


Object?.keys(disable_filter)?.map(
              (item1) => {
                Object?.keys(filter_dict)?.map(
              (item2) => {
                   if(disable_filter[item1]?.heading === filter_dict[item2]?.heading ){

                      if( disable_filter[item1]?.data?.length > 0  ){
                         filter_dict[item2] = {...filter_dict[item2], alreadySelected : true
                        };
                        
                        console.log("hello disable length",disable_filter[item1]?.data?.length);
                        console.log("hello heading",disable_filter[item1]?.heading);
                      };
                   };
                }
                );
     });
// const square = [];
                
console.log("martix",filter_dict);
