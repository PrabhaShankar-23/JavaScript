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

// console.log("filters keys findout ",Object.keys(disable_filter) );

const filtersSelectedbyUser = disable_filter;

const appliedFilters = [];

Object.keys(filtersSelectedbyUser).map(
              (item) => {
        // filtersSelectedbyUser[item].type === "autocomplete" && (             
        //  console.log("filters applied", filtersSelectedbyUser[item]?.data,  filtersSelectedbyUser[item]?.heading)
        //        );
        // console.log("Chips Name", filtersSelectedbyUser[item]?.data[0]?.name)
        
        if(filtersSelectedbyUser[item]?.heading === "Batch") {
            
            appliedFilters.push(`Batch ${filtersSelectedbyUser[item]?.data[0]?.name?.id}`);

           }

        else if (filtersSelectedbyUser[item]?.heading === "Course" || filtersSelectedbyUser[item]?.heading === "Degree" ) {

        appliedFilters.push(filtersSelectedbyUser[item]?.data[0]?.name);
        }
        else if (filtersSelectedbyUser[item]?.heading === "CGPA"){

                  
            appliedFilters.push(`CGPA Min ${filtersSelectedbyUser[item]?.data[0]?.cgpa_min}`); 
            appliedFilters.push(`CGPA Max ${filtersSelectedbyUser[item]?.data[1]?.cgpa_max}`); 

        };                
         });

console.log("applied filters",appliedFilters );



        