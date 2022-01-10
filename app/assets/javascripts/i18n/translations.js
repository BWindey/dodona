I18n.translations || (I18n.translations = {});
I18n.translations["en"] = I18n.extend((I18n.translations["en"] || {}), JSON.parse('{"date":{"abbr_day_names":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],"abbr_month_names":[null,"Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"day_names":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"formats":{"default":"%Y-%m-%d","long":"%B %d, %Y","monthday_long":"%B %d","short":"%b %d","weekday_long":"%A %B %d","weekday_short":"%a %b %d"},"month_names":[null,"January","February","March","April","May","June","July","August","September","October","November","December"],"order":["year","month","day"]},"js":{"actions":"Actions","activity-added-failed":"Adding activity failed","activity-added-success":"Activity added","activity-removed-failed":"Removing activity failed","activity-removed-success":"Activity removed","activity_types":"Activity types","annotation":{"hidden":{"plural":"%{count} hidden annotations","single":"Hidden annotation"},"type":{"error":"Error","info":"Notice","question":"Question","user":"Comment","warning":"Warning"}},"attempts":"attempts","code":{"copy-to-clipboard":"Copy code to clipboard"},"configured-institution":"the configured institution","copy-fail":"Press Ctrl-C to copy","copy-success":"Copied!","copy-to-clipboard":"Click to copy","course_labels":"Member labels","courses":"Courses","ctimeseries_desc":"This graph shows the evolution of the percentage of students that correctly solved each exercise.","ctimeseries_title":"Users with at least one correct submission","date_before":"before","date_on":"on","description_languages":"Languages for which there is a description available","en":"English","event_types":"Event types","favorite-course-do":"Favorite","favorite-course-failed":"Favoriting course failed","favorite-course-succeeded":"Favorited course","institutions":"Institutions","judges":"Judges","label-undeletable":"This label can\'t be deleted because it was set in the dirconfig file of a parent directory of the learning activity.","labels":"Labels","loading":"Loading...","machine_annotation":{"external_url":"Click here for more information."},"mark_as_read":"Mark as read","mark_as_unread":"Mark as unread","mean":"average","months":{"long":{"apr":"April","aug":"August","dec":"December","feb":"February","jan":"January","jul":"July","jun":"June","mar":"March","may":"May","nov":"November","oct":"October","sep":"September"},"short":{"apr":"Apr","aug":"Aug","dec":"Dec","feb":"Feb","jan":"Jan","jul":"Jul","jun":"Jun","mar":"Mar","may":"May","nov":"Nov","oct":"Oct","sep":"Sep"}},"n_submissions":"Number of submissions","nl":"Dutch","no_data":"There is not enough data to create a graph.","no_selection":"You must select at least one item before being able to download solutions.","options":"Options","programming_languages":"Programming Languages","question":{"state":{"answered":"Answered","in_progress":"In progress","unanswered":"Unanswered"}},"question_states":"Status","repositories":"Repositories","score":{"confirm":"Are you sure?","conflict":"This score was already changed by another user","unknown":"An unexpected error occured when saving the score"},"score_item":{"error":"Error while updating"},"stacked_desc":"This graph shows the distribution of submissions statuses.","stacked_title":"Distribution of submission statuses","status":{"compilation_error":"compilation error","correct":"correct","memory_limit_exceeded":"memory limit exceeded","output_limit_exceeded":"output limit exceeded","runtime_error":"runtime error","time_limit_exceeded":"time limit exceeded","wrong":"wrong"},"statuses":"Statuses","submission":"submission","submission-emoji":"Oops, something went wrong while saving your solution. Your solution contains special symbols such as emoji or math characters that were probably copied from the problem description. Please remove them and try again. If you can\'t find the problem, contact the teaching assistant.","submission-failed":"Oops, something went wrong while saving your solution. Reload this page, try again, or contact the teaching assistant.","submission-network":"Oops, we\'re unable to connect to the server. Please check your internet connection.","submission-not-allowed":"Oops, you are not allowed to submit a solution to this exercise.","submission-processed":"Evaluation finished","submission-rate-limit":"Oops, you\'re submitting too fast! Please wait a moment between each submission.","submission-saved":"Submission saved","submission-too-long":"Oops, something went wrong while saving your solution. Your solution is too long. Try to make it shorter and try again.","submissions":"submissions","submissions_on":"submissions on","timeseries_desc":"This graph shows on which moments the students submitted the most solutions.","timeseries_title":"Submissions over time","total":"total","tutor-failed":"Something went wrong while loading the online python tutor","unfavorite-course-do":"Unfavorite","unfavorite-course-failed":"Unfavoriting course failed","unfavorite-course-succeeded":"Unfavorited course","unknown-error-loading-feedback":"An unknown error occurred while loading the feedback for your submission","user":"user","user_annotation":{"cancel":"Cancel","delete":"Delete","delete_confirm":"Are you sure you want to delete this comment?","edit":"Edit comment","fields":{"annotation_text":"Comment"},"help":"Press Shift + Enter to send. \\u003ca href=\\"https://docs.dodona.be/en/references/exercise-description/#markdown\\" target=\\"_blank\\"\\u003eMarkdown\\u003c/a\\u003e is supported.","meta":"%{user} · %{time}","not_released":"This comment is not yet visible for students","send":"Comment","update":"Update"},"user_question":{"conflict":"The status of this question was already changed by another user","delete_confirm":"Are you sure you want to delete this question?","deleted":"This question was deleted by another user","edit":"Edit question","has_newer_submission":"There was a newer submission since this question. Click here to go to the latest submission.","in_progress":"Mark question as in progress","meta_else":"%{user} · %{time} · %{state} by %{last}","meta_unanswered":"%{user} · %{time} · %{state}","resolve":"Mark as answered","send":"Ask question","unresolve":"Re-open question","update":"Update question"},"users":"users","violin_desc":"This graph shows the distribution of the number of submissions. The larger the zone, the more students submitted that number of solutions. The dot indicates the average. When the average is larger than 20, the dot turns hollow.","violin_title":"Number of submissions per user","weekdays":{"long":{"fri":"Friday","mon":"Monday","sat":"Saturday","sun":"Sunday","thu":"Thursday","tue":"Tuesday","wed":"Wednesday"},"short":{"fri":"Fr","mon":"Mo","sat":"Sa","sun":"Su","thu":"Th","tue":"Tu","wed":"We"}},"with":"with"},"time":{"am":"am","formats":{"annotation":"%B %d, %Y %H:%M","default":"%a, %d %b %Y %H:%M:%S %z","long":"%B %d, %Y %H:%M","plain_time":"%H:%M","question":"%B %d, %Y %H:%M:%S","short":"%d %b %H:%M","submission":"%B %d, %Y %H:%M:%S","us":"%m/%d/%Y %I:%M %p"},"pm":"pm","units":{"day":["day","days"],"hour":["hour","hours"],"min":["minute","minutes"],"sec":["second","seconds"],"week":["week","weeks"]}}}'));
I18n.translations["nl"] = I18n.extend((I18n.translations["nl"] || {}), JSON.parse('{"date":{"abbr_day_names":["Zo","Ma","Di","Wo","Do","Vr","Za"],"abbr_month_names":[null,"Jan","Feb","Mrt","Apr","Mei","Jun","Jul","Aug","Sep","Okt","Nov","Dec"],"day_names":["zondag","maandag","dinsdag","woensdag","donderdag","vrijdag","zaterdag"],"formats":{"default":"%d-%m-%Y","long":"%e %B %Y","monthday_long":"%B %d","short":"%e %b","weekday_long":"%A %d %B","weekday_short":"%a %d %b"},"month_names":[null,"januari","februari","maart","april","mei","juni","juli","augustus","september","oktober","november","december"],"order":["day","month","year"]},"js":{"actions":"Acties","activity-added-failed":"Leeractiviteit toevoegen mislukt","activity-added-success":"Leeractiviteit toegevoegd","activity-removed-failed":"Leeractiviteit verwijderen mislukt","activity-removed-success":"Leeractiviteit verwijderd","activity_types":"Activiteitstypes","annotation":{"hidden":{"plural":"%{count} verborgen annotaties","single":"Verborgen annotatie"},"type":{"error":"Fout","info":"Info","question":"Vraag","user":"Opmerking","warning":"Waarschuwing"}},"attempts":"pogingen","code":{"copy-to-clipboard":"Kopieer code naar klembord"},"configured-institution":"de ingestelde onderwijsinstelling","copy-fail":"Druk Ctrl-C om te kopiëren","copy-success":"Gekopieerd!","copy-to-clipboard":"Klik om te kopiëren","course_labels":"Gebruikerlabels","courses":"Cursussen","ctimeseries_desc":"Deze grafiek geeft de evolutie weer van het percentage studenten dat een oefening correct had.","ctimeseries_title":"Gebruikers met minstens één correcte oplossing","date_before":"voor","date_on":"op","description_languages":"Talen waarin de beschrijving beschikbaar is","en":"Engels","event_types":"Event types","favorite-course-do":"Voeg toe aan favorieten","favorite-course-failed":"Cursus aan favorieten toevoegen mislukt","favorite-course-succeeded":"Cursus toegevoegd aan favorieten","institutions":"Onderwijsinstellingen","judges":"Judges","label-undeletable":"Dit label kan niet verwijderd worden omdat het werd ingesteld in het dirconfig bestand van een bovenliggende map.","labels":"Labels","loading":"Aan het laden...","machine_annotation":{"external_url":"Klik hier voor meer informatie."},"mark_as_read":"Als gelezen markeren","mark_as_unread":"Als ongelezen markeren","mean":"gemiddeld aantal","months":{"long":{"apr":"April","aug":"Augustus","dec":"December","feb":"Februari","jan":"Januari","jul":"Juli","jun":"Juni","mar":"Maart","may":"Mei","nov":"November","oct":"Oktober","sep":"September"},"short":{"apr":"Apr","aug":"Aug","dec":"Dec","feb":"Feb","jan":"Jan","jul":"Jul","jun":"Jun","mar":"Maa","may":"Mei","nov":"Nov","oct":"Okt","sep":"Sep"}},"n_submissions":"Aantal ingediende oplossingen","nl":"Nederlands","no_data":"Er is niet genoeg data om een grafiek te maken.","no_selection":"Er moet ten minste één iets gekozen worden om oplossingen te kunnen downloaden.","options":"Opties","programming_languages":"Programmeertalen","question":{"state":{"answered":"Beantwoord","in_progress":"In behandeling","unanswered":"Onbeantwoord"}},"question_states":"Toestand","repositories":"Repository\'s","score":{"confirm":"Bent u zeker?","conflict":"Deze score is al aangepast door een andere gebruiker","unknown":"Een onverwachte fout trad op bij het opslaan van de score"},"score_item":{"error":"Fout bij bijwerken"},"stacked_desc":"Deze grafiek geeft de verdeling van de oplossingsstatussen per oefening weer.","stacked_title":"Verdeling van de oplossingsstatus","status":{"compilation_error":"compilatiefout","correct":"correct","memory_limit_exceeded":"geheugenlimiet overschreden","output_limit_exceeded":"uitvoerlimiet overschreden","runtime_error":"uitvoeringsfout","time_limit_exceeded":"tijdslimiet overschreden","wrong":"fout"},"statuses":"Statussen","submission":"oplossing","submission-emoji":"Oeps, er ging iets fout bij het opslaan van je oplossing. Je oplossing bevat speciale tekens zoals emoji of wiskundige symbolen die je uit de opgave gekopieerd hebt. Verwijder deze en probeer opnieuw. Contacteer de assistent als je het probleem niet vindt.","submission-failed":"Oeps, er ging iets fout bij het opslaan van je oplossing. Herlaad de pagina, probeer opnieuw, of contacteer de assistent.","submission-network":"Oeps, we kunnen niet verbinden met de server. Controleer je internetverbinding.","submission-not-allowed":"Oeps, je bent niet toegelaten om een oplossing in te dienen voor deze oefening.","submission-processed":"Evaluatie afgerond","submission-rate-limit":"Oeps, je bent te snel! Wacht eventjes tussen het indienen van een nieuwe oplossing.","submission-saved":"Oplossing opgeslagen","submission-too-long":"Oeps, er ging iets fout bij het opslaan van je oplossing. Je oplossing is te lang. Maak ze korter en probeer opnieuw.","submissions":"oplossingen","submissions_on":"ingediende oplossingen op","timeseries_desc":"Deze grafiek toont op welke momenten het meest aan een bepaalde oefening werd gewerkt.","timeseries_title":"Ingediende oplossingen over tijd","total":"totaal aantal","tutor-failed":"Er ging iets fout bij het laden van de online python tutor","unfavorite-course-do":"Verwijder uit favorieten","unfavorite-course-failed":"Cursus uit favorieten verwijderen mislukt","unfavorite-course-succeeded":"Cursus verwijderd uit favorieten","unknown-error-loading-feedback":"Er is een onbekende fout opgetreden bij het laden van de feedback voor je oplossing","user":"gebruiker","user_annotation":{"cancel":"Annuleren","delete":"Verwijderen","delete_confirm":"Ben je zeker dat je deze opmerking wil verwijderen?","edit":"Opmerking bewerken","fields":{"annotation_text":"Opmerking"},"help":"Druk Shift + Enter om te verzenden. \\u003ca href=\\"https://docs.dodona.be/nl/references/exercise-description/#markdown\\" target=\\"_blank\\"\\u003eMarkdown\\u003c/a\\u003e  wordt ondersteund.","meta":"%{user} · %{time}","not_released":"Deze opmerking is nog niet zichtbaar voor studenten","send":"Toevoegen","update":"Updaten"},"user_question":{"conflict":"De status van deze vraag is al aangepast door een andere gebruiker","delete_confirm":"Ben je zeker dat je deze vraag wilt verwijderen?","deleted":"Deze vraag is verwijderd door een andere gebruiker","edit":"Vraag aanpassen","has_newer_submission":"Er is een nieuwe oplosssing ingediend sinds deze vraag. Klik hier om naar de nieuwste oplossing te gaan.","in_progress":"In behandeling markeren","meta_else":"%{user} · %{time} · %{state} door %{last}","meta_unanswered":"%{user} · %{time} · %{state}","resolve":"Als beantwoord markeren","send":"Vraag stellen","unresolve":"Vraag terug openen","update":"Vraag aanpassen"},"users":"gebruikers","violin_desc":"Deze grafiek geeft de verdeling weer van het aantal ingediende oplossingen. Hoe dikker de zone op de grafiek, hoe meer studenten dat aantal pogingen nodig had. Het bolletje geeft het gemiddelde aan. Wanneer het gemiddelde groter dan 20 is, wordt het bolletje hol.","violin_title":"Aantal oplossingen per gebruiker","weekdays":{"long":{"fri":"Vrijdag","mon":"Maandag","sat":"Zaterdag","sun":"Zondag","thu":"Donderdag","tue":"Dinsdag","wed":"Woensdag"},"short":{"fri":"Vr","mon":"Ma","sat":"Za","sun":"Zo","thu":"Do","tue":"Di","wed":"Wo"}},"with":"met"},"time":{"am":"\'s ochtends","formats":{"annotation":"%e %B %Y, %H:%M","default":"%a %d %b %Y %H:%M:%S %Z","long":"%d %B %Y %H:%M","plain_time":"%H:%M","question":"%d %B %Y %H:%M:%S","short":"%d %b %H:%M","submission":"%d %B %Y %H:%M:%S"},"pm":"\'s middags","units":{"day":["dag","dagen"],"hour":["uur","uren"],"min":["minuut","minuten"],"sec":["seconde","seconden"],"week":["week","weken"]}}}'));
