(function(){
    var modules={
        "panel-main-sdem":    	        {url:"$H/m/panel-main.html",router:1},
        "panel-child-sdem":              {url:"$H/m/panel-child.html"},
        "panel-library-sdem":    		{url:"$H/m/panel-library.html",router:1},
        "panel-export-screening-sdem":   {url:"$H/m/export/panel-export-screened.html",router:1},
        "panel-export-enrolled-sdem":    {url:"$H/m/export/panel-export-enrolled.html",router:1},
        "export-data":		                {url:"$H/m/export/export-data.html",Table:"export-sdem",form_module:"export-form"},
        "export-form":		                {url:"$H/m/export/export-form.html",Table:"export-sdem"},
        
        "participant-data":   		        {url:"$H/m/participant/participant-data.html",Table:"sdem-participant",form_module:"participant-form",router:1,
                                                child_panel:"panel-child-sdem",
                                                questionnaire_setup:"online-questionnaire-setup-sdem",
                                                online_questionnaire:"online-questionnaire-app-sdem",
                                                participant_id:{field1:"Subject_ID",field2:"Subject_Initials"},
                                                participant_export:"ID,Subject_ID,Screening_Number,Randomisation_Number,Subject_Initials,Gender,DOB"
                                            },
        "participant-form":   		        {url:"$H/m/participant/participant-form.html",Table:"sdem-participant"},

        "online-questionnaire-setup-sdem": {url:"$H/m/oq-setup.html",Table:"sdem-participant"},
        "online-questionnaire-app-sdem":   {url:"$H/oq.html"},

        "notes-data":  	                    {url:"$H/m/library/notes-data.html",Table:"sdem-notes",form_module:"notes-form",router:1},
        "notes-form":  	                    {url:"$H/m/library/notes-form.html",Table:"sdem-notes"},

        "randomisation-table-data-sdem":		{url:"$H/m/library/randomisation-table-data.html",Table:"randomisation-table-sdem",form_module:"randomisation-table-form-sdem"},
        "randomisation-table-form-sdem":		{url:"$H/m/library/randomisation-table-form.html",Table:"randomisation-table-sdem"},

        "file-notes-data-sdem":		{url:"$H/m/library/file-notes-data.html",Table:"file-notes-sdem",form_module:"file-notes-form-sdem",task_name:"Unscheduled - File Notes"},
        "file-notes-form-sdem":		{url:"$H/m/library/file-notes-form.html",Table:"file-notes-sdem",task_name:"Unscheduled - File Notes"},
        "consent-data-sdem":		        {url:"$H/m/library/consent-data.html",Table:"consent-sdem",form_module:"consent-form-sdem",task_name:"Self Report Screening - Consent"},
        "consent-form-sdem":		        {url:"$H/m/library/consent-form.html",Table:"consent-sdem",task_name:"Self Report Screening - Consent"},
        "gds-data-sdem":		{url:"$H/m/library/gds-data.html",Table:"gds-sdem",form_module:"gds-form-sdem",task_name:"Self Report Screening - Geriatric Depression Scale"},
        "gds-form-sdem":		{url:"$H/m/library/gds-form.html",Table:"gds-sdem",task_name:"Self Report Screening - Geriatric Depression Scale"},
        "isi-data-sdem":	    {url:"$H/m/library/isi-data.html",Table:"isi-sdem",form_module:"isi-form-sdem",task_name:"Self Report Screening - Insomnia Severity Index"},
        "isi-form-sdem":	    {url:"$H/m/library/isi-form.html",Table:"isi-sdem",task_name:"Self Report Screening - Insomnia Severity Index"},
        "medical-history-data-sdem":	    {url:"$H/m/library/medical-history-data.html",Table:"medical-history-sdem",form_module:"medical-history-form-sdem",task_name:"Self Report Screening - Medical History Questionnaire"},
        "medical-history-form-sdem":	    {url:"$H/m/library/medical-history-form.html",Table:"medical-history-sdem",task_name:"Self Report Screening - Medical History Questionnaire"},
        "medication-data-sdem":	    {url:"$H/m/library/medications-data.html",Table:"medication-sdem",form_module:"medication-form-sdem",task_name:"Self Report Screening - Medication Questionnaire"},
        "medication-form-sdem":	    {url:"$H/m/library/medications-form.html",Table:"medication-sdem",task_name:"Self Report Screening - Medication Questionnaire"},
        "lifestyle-data-sdem":	    {url:"$H/m/library/lifestyle-data.html",Table:"lifestyle-sdem",form_module:"lifestyle-form-sdem",task_name:"Self Report Screening - Lifestyle questionnaire"},
        "lifestyle-form-sdem":	    {url:"$H/m/library/lifestyle-form.html",Table:"lifestyle-sdem",task_name:"Self Report Screening - Lifestyle questionnaire"},
        "ethnicity-data-sdem":	    {url:"$H/m/library/ethnicity-data.html",Table:"ethnicity-sdem",form_module:"ethnicity-form-sdem",task_name:"Self Report Screening - Ethnicity questionnaire"},
        "ethnicity-form-sdem":	    {url:"$H/m/library/ethnicity-form.html",Table:"ethnicity-sdem",task_name:"Self Report Screening - Ethnicity questionnaire"},
        "education-data-sdem":	    {url:"$H/m/library/education-data.html",Table:"education-sdem",form_module:"education-form-sdem",task_name:"Self Report Screening - Education questionnaire"},
        "education-form-sdem":	    {url:"$H/m/library/education-form.html",Table:"education-sdem",task_name:"Self Report Screening - Education questionnaire"},
        "wristox-data-sdem":	    {url:"$H/m/library/wristox-data.html",Table:"wristox-sdem",form_module:"wristox-form-sdem",task_name:"Screening - Wristox"},
        "wristox-form-sdem":	    {url:"$H/m/library/wristox-form.html",Table:"wristox-sdem",task_name:"Screening - Wristox"},

        "date-s-data-sdem":                {url:"$H/m/library/date-data.html",Table:"date-s-sdem",form_module:"date-s-form-sdem",task_name:"Screening - Visit Date"},
        "date-s-form-sdem":                {url:"$H/m/library/date-form.html",Table:"date-s-sdem",task_name:"Screening - Visit Date"},
        "stroop-text-s-data-sdem":		            {url:"$H/m/neurocog/stroop-text-data.html",Table:"stroop-text-s-sdem",form_module:"stroop-text-s-form-sdem",task_name:"Screening - Stroop Text"},
        "stroop-text-s-form-sdem":		            {url:"$H/m/neurocog/stroop-text-form.html",Table:"stroop-text-s-sdem",task_name:"Screening - Stroop Text"},
        "stroop-colour-s-data-sdem":		            {url:"$H/m/neurocog/stroop-colour-data.html",Table:"stroop-colour-s-sdem",form_module:"stroop-colour-s-form-sdem",task_name:"Screening - Stroop Colour"},
        "stroop-colour-s-form-sdem":		            {url:"$H/m/neurocog/stroop-colour-form.html",Table:"stroop-colour-s-sdem",task_name:"Screening - Stroop Colour"},

        "date-ssn-data-sdem":                {url:"$H/m/library/date-data.html",Table:"date-ssn-sdem",form_module:"date-ssn-form-sdem",task_name:"Sleep Study - Visit Date"},
        "date-ssn-form-sdem":                {url:"$H/m/library/date-form.html",Table:"date-ssn-sdem",task_name:"Sleep Study - Visit Date"},

        "psggrr-data-sdem":                    {url:"$H/m/library/psggrr-data.html",Table:"psggrr-sdem",form_module:"psggrr-form-sdem",task_name:"Grael Research PSG Report"},
        "psggrr-form-sdem":                    {url:"$H/m/library/psggrr-form.html",Table:"psggrr-sdem",task_name:"Grael Research PSG Report"},
        "psg300-data-sdem":                    {url:"$H/m/library/psg300-data.html",Table:"psg300-sdem",form_module:"psg300-form-sdem",task_name:"PSG 300 Report"},
        "psg300-form-sdem":                    {url:"$H/m/library/psg300-form.html",Table:"psg300-sdem",task_name:"PSG 300 Report"},
    }
    for(p in modules){
        $vm.module_list[p]=modules[p];
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
})();
