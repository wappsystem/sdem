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
        "adverse-event-data-sdem":		{url:"$H/m/library/adverse-event-data.html",Table:"adverse-event-sdem",form_module:"adverse-event-form-sdem",task_name:"Unscheduled - Adverse Event"},
        "adverse-event-form-sdem":		{url:"$H/m/library/adverse-event-form.html",Table:"adverse-event-sdem",task_name:"Unscheduled - Adverse Event"},
        "consent-data-sdem":		        {url:"$H/m/library/consent-data.html",Table:"consent-sdem",form_module:"consent-form-sdem",task_name:"Self Report Screening - Consent"},
        "consent-form-sdem":		        {url:"$H/m/library/consent-form.html",Table:"consent-sdem",task_name:"Self Report Screening - Consent"},
        "gds-data-sdem":		{url:"$H/m/library/gds-data.html",Table:"gds-sdem",form_module:"gds-form-sdem",task_name:"Self Report Screening - Geriatric Depression Scale"},
        "gds-form-sdem":		{url:"$H/m/library/gds-form.html",Table:"gds-sdem",task_name:"Self Report Screening - Geriatric Depression Scale"},
        "isi-data-sdem":	    {url:"$H/m/library/isi-data.html",Table:"isi-sdem",form_module:"isi-form-sdem",task_name:"Self Report Screening - Insomnia Severity Index"},
        "isi-form-sdem":	    {url:"$H/m/library/isi-de-form.html",Table:"isi-sdem",task_name:"Self Report Screening - Insomnia Severity Index"},
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
        "wristox-s-data-sdem":	    {url:"$H/m/library/wristox-data.html",Table:"wristox-sdem",form_module:"wristox-s-form-sdem",task_name:"Screening - Wristox"},
        "wristox-s-form-sdem":	    {url:"$H/m/library/wristox-form.html",Table:"wristox-sdem",task_name:"Screening - Wristox"},
        "mmse-s-data-sdem":	    {url:"$H/m/library/mmse-data.html",Table:"mmse-sdem",form_module:"mmse-s-form-sdem",task_name:"Screening - Mini‐Mental State Examination Score"},
        "mmse-s-form-sdem":	    {url:"$H/m/library/mmse-form.html",Table:"mmse-sdem",task_name:"Screening - Mini‐Mental State Examination Score"},

        "date-s-data-sdem":                {url:"$H/m/library/date-data.html",Table:"date-s-sdem",form_module:"date-s-form-sdem",task_name:"Screening - Visit Date"},
        "date-s-form-sdem":                {url:"$H/m/library/date-form.html",Table:"date-s-sdem",task_name:"Screening - Visit Date"},
        "dsm-s-data-sdem":                {url:"$H/m/library/dsm-data.html",Table:"dsm-s-sdem",form_module:"dsm-s-form-sdem",task_name:"Screening - DSM-IV M.I.N.I"},
        "dsm-s-form-sdem":                {url:"$H/m/library/dsm-form.html",Table:"dsm-s-sdem",task_name:"Screening - DSM-IV M.I.N.I"},
        "wtars-s-data-sdem":                {url:"$H/m/library/wtars-data.html",Table:"wtars-s-sdem",form_module:"wtars-s-form-sdem",task_name:"Screening - Wechsler Test of Adult Reading Score"},
        "wtars-s-form-sdem":                {url:"$H/m/library/wtars-form.html",Table:"wtars-s-sdem",task_name:"Screening - Wechsler Test of Adult Reading Score"},
        "ravlts-s-data-sdem":                {url:"$H/m/library/ravlts-data.html",Table:"ravlts-s-sdem",form_module:"ravlts-s-form-sdem",task_name:"Screening - Rey Auditory Verbal Learning Test Scores"},
        "ravlts-s-form-sdem":                {url:"$H/m/library/ravlts-form.html",Table:"ravlts-s-sdem",task_name:"Screening - Rey Auditory Verbal Learning Test Scores"},
        "tmts-s-data-sdem":                {url:"$H/m/library/tmts-data.html",Table:"tmts-s-sdem",form_module:"tmts-s-form-sdem",task_name:"Screening - Trail Making Test Scores"},
        "tmts-s-form-sdem":                {url:"$H/m/library/tmts-form.html",Table:"tmts-s-sdem",task_name:"Screening - Trail Making Test Scores"},
        "stroop-s-data-sdem":		            {url:"$H/m/library/stroop-data.html",Table:"stroop-s-sdem",form_module:"stroop-s-form-sdem",task_name:"Screening - Stroop Data Entry"},
        "stroop-s-form-sdem":		            {url:"$H/m/library/stroop-form.html",Table:"stroop-s-sdem",task_name:"Screening - Stroop Data Entry"},
//        "stroop-colour-s-data-sdem":		            {url:"$H/m/neurocog/stroop-colour-data.html",Table:"stroop-colour-s-sdem",form_module:"stroop-colour-s-form-sdem",task_name:"Screening - Stroop Colour"},
//        "stroop-colour-s-form-sdem":		            {url:"$H/m/neurocog/stroop-colour-form.html",Table:"stroop-colour-s-sdem",task_name:"Screening - Stroop Colour"},

        "date-ssn-data-sdem":                {url:"$H/m/library/date-data.html",Table:"date-ssn-sdem",form_module:"date-ssn-form-sdem",task_name:"Sleep Study - Visit Date"},
        "date-ssn-form-sdem":                {url:"$H/m/library/date-form.html",Table:"date-ssn-sdem",task_name:"Sleep Study - Visit Date"},
        "anthropometry-ssn-data-sdem":                {url:"$H/m/library/anthropometry-data.html",Table:"anthropometry-ssn-sdem",form_module:"anthropometry-ssn-form-sdem",task_name:"Sleep Study - Anthropometry"},
        "anthropometry-ssn-form-sdem":                {url:"$H/m/library/anthropometry-form.html",Table:"anthropometry-ssn-sdem",task_name:"Sleep Study - Anthropometry"},
        "hads-ssn-data-sdem":                {url:"$H/m/library/hads-data.html",Table:"hads-ssn-sdem",form_module:"hads-ssn-form-sdem",task_name:"Sleep Study - Hospital Anxiety and Depression Scale"},
        "hads-ssn-form-sdem":                {url:"$H/m/library/hads-form.html",Table:"hads-ssn-sdem",task_name:"Sleep Study - Hospital Anxiety and Depression Scale"},
        "me-ssn-data-sdem":                {url:"$H/m/library/me-data.html",Table:"me-ssn-sdem",form_module:"me-ssn-form-sdem",task_name:"Sleep Study - Horne and Ӧstberg Morningness‐Eveningness Questionnaire"},
        "me-ssn-form-sdem":                {url:"$H/m/library/me-form.html",Table:"me-ssn-sdem",task_name:"Sleep Study - Horne and Ӧstberg Morningness‐Eveningness Questionnaire"},
        "psqi-ssn-data-sdem":                {url:"$H/m/library/psqi-data.html",Table:"psqi-ssn-sdem",form_module:"psqi-ssn-form-sdem",task_name:"Sleep Study - Pittsburgh Sleep Quality Index"},
        "psqi-ssn-form-sdem":                {url:"$H/m/library/psqi-form.html",Table:"psqi-ssn-sdem",task_name:"Sleep Study - Pittsburgh Sleep Quality Index"},
        "ffs-ssn-data-sdem":                {url:"$H/m/library/ffs-data.html",Table:"ffs-ssn-sdem",form_module:"ffs-ssn-form-sdem",task_name:"Sleep Study - Flinders Fatigue Scale Score"},
        "ffs-ssn-form-sdem":                {url:"$H/m/library/ffs-form.html",Table:"ffs-ssn-sdem",task_name:"Sleep Study - Flinders Fatigue Scale Score"},
        "ess-ssn-data-sdem":                {url:"$H/m/library/ess-data.html",Table:"ess-ssn-sdem",form_module:"ess-ssn-form-sdem",task_name:"Sleep Study - Epworth Sleepiness Scale (ESS)"},
        "ess-ssn-form-sdem":                {url:"$H/m/library/ess-form.html",Table:"ess-ssn-sdem",task_name:"Sleep Study - Epworth Sleepiness Scale (ESS)"},
        "kss-ssne-data-sdem":                {url:"$H/m/library/kss-data.html",Table:"kss-ssne-sdem",form_module:"kss-ssne-form-sdem",task_name:"Sleep Study - Karolinska Sleepiness Scale (Evening)"},
        "kss-ssne-form-sdem":                {url:"$H/m/library/kss-form.html",Table:"kss-ssne-sdem",task_name:"Sleep Study - Karolinska Sleepiness Scale (Evening)"},
        "kss-ssnm-data-sdem":                {url:"$H/m/library/kss-data.html",Table:"kss-ssnm-sdem",form_module:"kss-ssnm-form-sdem",task_name:"Sleep Study - Karolinska Sleepiness Scale (Morning)"},
        "kss-ssnm-form-sdem":                {url:"$H/m/library/kss-form.html",Table:"kss-ssnm-sdem",task_name:"Sleep Study - Karolinska Sleepiness Scale (Morning)"},

        "iapsl-ssn-data-sdem":                {url:"$H/m/library/iapsl-data.html",Table:"iapsl-ssn-sdem",form_module:"iapsl-ssn-form-sdem",task_name:"Sleep Study - International Affective Picture System task evening learning"},
        "iapsl-ssn-form-sdem":                {url:"$H/m/library/iapsl-form.html",Table:"iapsl-ssn-sdem",task_name:"Sleep Study - International Affective Picture System task evening learning"},
        "iapsr1-ssne-data-sdem":                {url:"$H/m/library/iapsr1-data.html",Table:"iapsr1-ssne-sdem",form_module:"iapsr1-ssne-form-sdem",task_name:"Sleep Study - International Affective Picture System task evening recognition"},
        "iapsr1-ssne-form-sdem":                {url:"$H/m/library/iapsr1-form.html",Table:"iapsr1-ssne-sdem",task_name:"Sleep Study - International Affective Picture System task evening recognition"},
        "iapsr2-ssnm-data-sdem":                {url:"$H/m/library/iapsr2-data.html",Table:"iapsr2-ssnm-sdem",form_module:"iapsr2-ssnm-form-sdem",task_name:"Sleep Study - International Affective Picture System task morning recognition"},
        "iapsr2-ssnm-form-sdem":                {url:"$H/m/library/iapsr2-form.html",Table:"iapsr2-ssnm-sdem",task_name:"Sleep Study - International Affective Picture System task morning recognition"},
        "pupillometry-ssn-data-sdem":                {url:"$H/m/library/pupillometry-data.html",Table:"pupillometry-ssn-sdem",form_module:"pupillometry-ssn-form-sdem",task_name:"Sleep Study - Pupillometry output"},
        "pupillometry-ssn-form-sdem":                {url:"$H/m/library/pupillometry-form.html",Table:"pupillometry-ssn-sdem",task_name:"Sleep Study - Pupillometry output"},
        "cavl-ssn-data-sdem":                {url:"$H/m/library/cavl-data.html",Table:"cavl-ssn-sdem",form_module:"cavl-ssn-form-sdem",task_name:"Sleep Study - Cognitive Affective Verbal Learning task scores"},
        "cavl-ssn-form-sdem":                {url:"$H/m/library/cavl-form.html",Table:"cavl-ssn-sdem",task_name:"Sleep Study - Cognitive Affective Verbal Learning task scores"},

        "psggrr-ssn-data-sdem":                    {url:"$H/m/library/psggrr-data.html",Table:"psggrr-ssn-sdem",form_module:"psggrr-ssn-form-sdem",task_name:"Sleep Study - Grael Research PSG Report"},
        "psggrr-ssn-form-sdem":                    {url:"$H/m/library/psggrr-form.html",Table:"psggrr-ssn-sdem",task_name:"Sleep Study - Grael Research PSG Report"},
        "psg-edf-ssn-data-sdem":                    {url:"$H/m/library/upload-file-data.html",Table:"psg-edf-ssn-sdem",form_module:"psg-edf-ssn-form-sdem",task_name:"Sleep Study - PSG EDF"},
        "psg-edf-ssn-form-sdem":                    {url:"$H/m/library/upload-file-form.html",Table:"psg-edf-ssn-sdem",task_name:"Sleep Study - PSG EDF"},
        "sleep-scoring-ssn-data-sdem":                    {url:"$H/m/library/upload-file-data.html",Table:"sleep-scoring-ssn-sdem",form_module:"sleep-scoring-ssn-form-sdem",task_name:"Sleep Study - Sleep Scoring/Staging upload (hypnogram)"},
        "sleep-scoring-ssn-form-sdem":                    {url:"$H/m/library/upload-file-form.html",Table:"sleep-scoring-ssn-sdem",task_name:"Sleep Study - Sleep Scoring/Staging upload (hypnogram)"},
        "source-doc-ssn-data-sdem":                    {url:"$H/m/library/upload-file-data.html",Table:"source-doc-ssn-sdem",form_module:"source-doc-ssn-form-sdem",task_name:"Sleep Study - Source Documentation"},
        "source-doc-ssn-form-sdem":                    {url:"$H/m/library/upload-file-form.html",Table:"source-doc-ssn-sdem",task_name:"Sleep Study - Source Documentation"},
        "geoscan-ssn-data-sdem":                    {url:"$H/m/library/upload-file-data.html",Table:"geoscan-ssn-sdem",form_module:"geoscan-ssn-form-sdem",task_name:"Sleep Study - Geoscan File upload"},
        "geoscan-ssn-form-sdem":                    {url:"$H/m/library/upload-file-form.html",Table:"geoscan-ssn-sdem",task_name:"Sleep Study - Geoscan File upload"},
    }
    for(p in modules){
        $vm.module_list[p]=modules[p];
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    if(window.location.toString().indexOf('tb=demo')!=-1){
        for(p in $vm.module_list){
            $vm.module_list[p].Table="demo-"+$vm.module_list[p].Table;
        }
    }

})();
