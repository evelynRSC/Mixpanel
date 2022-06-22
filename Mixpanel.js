// This function executes every time a user views any page
function pageViewed(page) {
    mixpanel.track("Page Viewed", {
        "Triggered On": page.trig_subdir, 
        "Page Variant": page.variant, 
        "Viewing": page.subdir, 
        "CTA": page.cta, 
        "Langauge": page.lang
    });
}

// This function executes when a user successfully shares a page
function pageShared(page) {
    mixpanel.track("Page Shared", {
        "Page Variant": page.variant,
        "Page Shared": page.subdir,
        "CTA": page.cta, 
        "Langauge": page.lang, 
        "Sharing Method": page.sharing_method
    });
}

// This function executes when a user successfully downloads a page
function pageDownloaded(page) { 
    mixpanel.track("Page Downloaded", {
        "Page Donwloaded": page.subdir, 
        "Page Variant": page.variant, 
        "CTA": page.cta, 
        "Langauge": page.lang, 
        "Download Format": page.download_format
    });
}

// This function executes every time a user follows a topic
function topicFollowed(page, topic) {
    mixpanel.track("Topic Followed", {
        "Triggered On": page.trig_subdir, 
        "Topic": topic.name, 
        "CTA": topic.button
    });
    mixpanel.people.append("Topics Followed", topic.name);
}

// This function executes every time a user unfollows a topic
function topicUnfollowed(page, topic) {
    mixpanel.track("Topic Unfollowed", {
        "Triggered On": page.trig_subdir, 
        "CTA": page.button,
        "Topic": topic.name
    });
    mixpanel.people.remove("Topics Followed", topic.name);
}

// This function executes when a user begins the sign up process
function signUpStarted(page) {
    mixpanel.track("Sign Up Started", {
        "Last Field Entered": page.ending, 
        "Triggered On": page.trig_subdir, 
        "CTA": page.button
    });
}

// This function executes when a user successfully signs up
function signedUp(user) {
    mixpanel.alias(user.email);
    mixpanel.register({
        "User Status": "Signed Up"
    });
    mixpanel.track("Signed Up", {
        "Referred?": user.referral, 
        "Signup Method": user.signupMethod, 
        "Date Signed Up": new Date().toISOString()
    });
    mixpanel.people.set({
        "$name": user.name, 
        "$email": user.email, 
        "User Zipcode": user.zipcode, 
        "Referred?": user.referral, 
        "Signup Method": user.signup_method
    });
    mixpanel.people.set_once({
        "Date Signed Up": new Date().toISOString()
    });
}


// This function executes when a user verifies their email
function accountConfirmed() {
    mixpanel.register({
        "User Status": "Account Confirmed"
    });
    mixpanel.track("Account Confirmed");
    mixpanel.set_once({
        "Account Confirmed On": new Date().toISOString()
    });
}

// This function executes after a user verifies their email and fills out at least the first question in the onboarding 
function onboardingStarted(page) {
    mixpanel.track("Onboarding Started", {
        "Last Field Entered": page.stopping_point
    });
} 

// This function executes when a user completes the onboarding questionnaire
function onboarded(questions) {
    mixpanel.register({
        "User Status": "Onboarded"
    });
    mixpanel.track("Onboarded", {
        "Recipient Relationship": questions.relationship, 
        "Recipient Name": questions.name, 
        "Recipient Gender": questions.gender, 
        "Recipient Birth Year": questions.birth_year, 
        "Recipient Zipcode": questions.zipcode, 
        "Recipient's Main Health Concern": questions.health_concern, 
        "User Care Length": questions.care_length, 
        "User Weekly Hours": questions.weekly_hours, 
        "User Care Help": questions.help
    });
    mixpanel.people.set({
        "$phone": questions.phone, 
        "Recipient Relationship": questions.relationship, 
        "Recipient Name": questions.name, 
        "Recipient Gender": questions.gender, 
        "Recipient Birth Year": questions.birth_year, 
        "Recipient Zipcode": questions.zipcode, 
        "Recipient's Main Health Concern": questions.health_concern, 
        "User Care Length": questions.care_length, 
        "User Weekly Hours": questions.weekly_hours, 
        "User Care Help": questions.help
    });
    mixpanel.set_once({
        "Onboarded On": new Date().toISOString()
    });
}

// This function executes every time a user logs in 
function login(user, page) {
    mixpanel.identify(user.email);
    mixpanel.register({
        "User Plan": user.plan
    });
    mixpanel.track("Login", {
        "Triggered On": page.trig_subdir,
        "CTA": page.button
    });
    mixpanel.people.append("Platforms Used", user.platform);
}

// This function executes when a user edits their account information
function accountEdited(user) {
    mixpanel.track("Account Edited", {
        "Element(s) Edited": account.account_items
    });
    mixpanel.people.set({
        "$email": user.email, 
        "$name": user.name, 
        "$phone": user.phone, 
        "User Address": user.address
    });
}

// This function executes when a user changes their subscription preferences
function preferencesEdited(user) {
    mixpanel.track("Preferences Edited", {
        "Email Subscription": user.email_sub, 
        "SMS Notifications": user.sms_sub
    });
    mixpanel.people.set({
        "Email Subscription": user.email_sub, 
        "SMS Notification": user.sms_sub
    });
}

// This function executes when a user subscribes to the newsletter from the website footer
function newsletterSubscribed(user) {
    mixpanel.track("Newsletter Subscribed", {
        "Email Address": user.email
    });
}

// This function executes when a user views the CareMap dashboard
function caremapsViewed(page) {
    mixpanel.track("CareMaps Dashboard Viewed", {
        "Page Variant": page.variant, 
        "Triggered On": page.trig_subdir, 
        "CTA": page.button, 
        "Langauge": page.lang
    });
}

// This function executes every time a user views a particular CareMap
function caremapViewed(cm) {
    mixpanel.track("CareMap Viewed", {
        "CareMap Name": cm.name, 
        "Page Variant": cm.variant, 
        "Triggered On": cm.trig_subdir, 
        "CTA": cm.button, 
        "Langauge": cm.lang
    });

}

// This function executes every time a user starts or restarts a CareMap questionnaire
function cmStarted(cm) {
    mixpanel.track("CareMap Questionnaire Started", {
        "CareMap Name": cm.name, 
        "Completion Status": cm.status, 
        "Last Question Answered": cm.last_question
    });
}

// This function executes when a user completes the Benefits Finder questionnaire
function bfCompleted(questions) {
    mixpanel.track("Benefits Finder Questionnaire Completed", {
        "Recipient Zip Code Confirmation": questions.zip_confirmation, 
        "Edited Recipient Zip Code": questions.zipcode, 
        "Limited Income Eligibility": questions.income, 
        "Recipient Veteran Status": questions.veteran, 
        "Recipient Marital Status": questions.marital, 
        "Recipient Ethnicity": questions.ethnicity, 
        "Program Interests": questions.programs
    });
    mixpanel.people.set({
        "Benefits Finder CareMap Status": "Questionnaire Completed", 
        "Limited Income Eligibility": questions.income, 
        "Recipient Veteran Status": questions.veteran, 
        "Recipient Ethnicity": questions.ethnicity
    });
}

// This function executes when a user completes the Daily Caring questionnaire
function dcCompleted(questions) {
    mixpanel.track("Daily Caring Questionnaire Completed", {
        "User Concerns": questions.concerns, 
        "Main Condition Confirmation": questions.main_condition_conf, 
        "Edited Recipient Condition": questions.main_condition, 
        "Recipient ADLs": questions.adls, 
        "Recipient In-Home Care": questions.inhome_care
    });
    mixpanel.people.set({
        "Daily Caring CareMap Status": "Questionnaire Completed"
    });
}

// This function executes when a user completes the Housing questionnaire
function housingCompleted(questions) {
    mixpanel.track("Housing Questionnaire Completed", {
        "Housing Concern(s)": questions.concerns, 
        "Recipient Zip Code Confirmation": questions.zip_confirmation, 
        "Recipient Zip Code": questions.zipcode, 
        "Recipient ADLs": questions.adls, 
        "Recipient IADLs": questions.iadls, 
        "Weekly Hours of Help": questions.weekly_hours, 
        "Part(s) of Day": questions.day_parts, 
        "Other Housing Concerns": questions.other
    });
    mixpanel.people.set({
        "Housing CareMap Status": "Questionnaire Completed"
    });
}

// This function executes when a user has completed the Legal Wishes questionnaire
function lwCompleted(questions) {
    mixpanel.track("Legal Wishes Questionnaire Completed", {
        "Care Wishes Conversation": questions.conversation, 
        "Reason for No Conversation": questions.conversation_reason, 
        "Advance Care Directive": questions.directive, 
        "Financial Power of Attorney": questions.poa, 
        "Recipient Legal Misc": questions.legal_misc, 
        "Elder Law Attorney": questions.attorney
    });
    mixpanel.people.set({
        "Legal Wishes CareMap Status": "Questionnaire Completed"
    }); 
}

// This function executes when a user has completed the Money Matters questionnaire
function mmCompleted(questions) {
    mixpanel.track("Money Matters Questionnaire Completed", {
        "Recipient Financial Preparation": questions.fin_prep, 
        "Recipient Savings Status": questions.savings, 
        "Recipient Financial Decisions Capability": questions.decisions, 
        "Recipient Medicare Qualification": questions.medicare, 
        "Recipient Medicaid Qualification": questions.medicaid, 
        "Recipient Veteran Status": questions.veteran, 
        "Biggest Concern": questions.concern
    });
    mixpanel.people.set({
        "Money Matters CareMap Status": "Questionnaire Completed", 
        "Recipient Veteran Status": questions.veteran
    }); 
}

// This function executes when a user completes the Self Care questionnaire
function scCompleted(questions) {
    mixpanel.track("Self Care Questionnaire Completed", {
        "Caregiver Loneliness": questions.loneliness, 
        "Caregiver Time for Self": questions.time_self, 
        "Caregiver Time for Family": questions.time_family, 
        "Caregiver Balancing Work": questions.balancing_work, 
        "Caregiver Health": questions.health,
        "Caregiver Guilt": questions.guilt, 
        "Caregiver Family Conflict": questions.fam_conflict, 
        "Caregiver Financial Burden": questions.fin_burden, 
        "Caregiver Decision Making": questions.decision_making, 
        "Caregiver Under-Appreciation": questions.under_apprec, 
        "Caregiver Lost Control": questions.lost_control
    });
    mixpanel.people.set({
        "Self Care CareMap Status": "Questionnaire Completed"
    }); 
}

// This function executes when a user opens a CM questionnaire to be edited
function cmEdited(cm) {
    mixpanel.track("CareMap Questionnaire Edited", {
        "CareMap Name": cm.name, 
        "Last Updated On": cm.last_updated
    });
}

// This function executes every time a user views the Caregiving Tools dashboard
function toolsViewed(page) {
    mixpanel.track("Caregiving Tools Viewed", {
        "Page Variant": page.variant, 
        "Triggered On": page.trig_subdir, 
        "CTA": page.button, 
        "Langauge": page.lang
    });
}

// This function executes every time a user uses the Cost of Care Calculator
function careCalculated(questions) {
    mixpanel.track("Cost of Care Calculator", {
        "Recipient Zipcode": questions.zipcode
    });
    mixpanel.people.increment("Cost Calculator Views");
}

// This function executes every time a user views the the Hospitalization checklist
function hospitalizationViewed(page) {
    mixpanel.track("Hospitalization Checklist Viewed", {
        "Page Variant": page.variant, 
        "Triggered On": page.trig_subdir, 
        "CTA": page.button, 
        "Langauge": page.lang
});
    mixpanel.people.increment("Hospitalization Checklist Views");
}

// This function executes when a user expands a Solution Card in a Care Map
function solutionExpanded(page) {
    mixpanel.track("Solution Card Expanded", {
        "CareMap Name": page.name, 
        "Solution Card Title": page.card_title
    });
}

// This function executes when a user clicks on a "Learn More" button in a CareMap Solution Card
function solutionLearnMore(page) {
    mixpanel.track("Solution Card Learn More", {
        "CareMap Name": page.name, 
        "Solution Card Title": page.card_title, 
        "URL": page.ext_link
    });
}

// This function executes when a user expands an inner part of a Solution Card
function innerExpanded(page) {
    mixpanel.track("Inner Card Expanded", {
        "Map/Tool Name": page.name, 
        "Solution Card Title": page.card_title, 
        "Inner Card Title": page.inner_title
    });
}

// This function executes when a user views the Care Journal navigation page
function careJournalViewed(page) {
    mixpanel.track("Care Journal Viewed", {
        "Page Variant": page.variant, 
        "Triggered On": page.trig_subdir, 
        "CTA": page.button, 
        "Langauge": page.lang
    });
}

// This function executes every time a new entry is added to the Care Journal
function journalEntryAdded(entry) {
    mixpanel.track("Care Journal Entry Added", {
        "Profile": entry.profile, 
        "Category": entry.category, 
        "Subcategory": entry.subcategory,
        "CTA": entry.button
    });
    mixpanel.people.increment('# of Jornal Entries');
}

// This function executes every time a user edits a Care Journal entry
function journalEntryEdited(entry) {
    mixpanel.track("Care Journal Entry Edited", {
        "Profile": entry.profile, 
        "Category": entry.category, 
        "Subcategory": entry.subcategory
    });
}

// This function executes every time a user deletes a Care Journal entry
function journalEntryDeleted(entry) {
    mixpanel.track("Care Journal Entry Deleted", {
        "Profile": entry.profile, 
        "Category": entry.category, 
        "Subcategory": entry.subcategory
    });
    mixpanel.people.increment('# of Journal Entries', -1);
}

// This function executes every time a user lands on the Community home page
function communityViewed(page) {
    mixpanel.track("CareCommunity Viewed", {
        "Page Variant": page.variant, 
        "Triggered On": page.trig_subdir, 
        "CTA": page.button, 
        "Langauge": page.lang
    });
}

// This function executes each time a user starts to create a new post
function postStarted(post) {
    mixpanel.track("Post Started", {
        "Completion Status": post.status, 
        "Triggered On": post.subdir
    });
}

// This function executes every time a user submits a post in Community
function postSubmitted(post) {
    mixpanel.track("Post Submitted", {
        "Question": post.question, 
        "Additional Details": post.details, 
        "Topic Tags": post.tags
    });
    mixpanel.people.increment('# of Posts Submitted');
}

// This function executes when a user cancels a post they have not submitted
function postCancelled(post) {
    mixpanel.track("Post Cancelled", {
        "Question": post.question
    });
}

// This function executes when a user deletes a post they previously submitted
function postDeleted(post) {
    mixpanel.track("Post Deleted", {
        "Question": post.question
    });
    mixpanel.people.increment("# of Posts Submitted", -1)
}

// This function executes when a user comments on a Community post
function postCommented(post) {
    mixpanel.track("Post Commented On", {
        "Comment": post.comment
    });
    mixpanel.people.increment('# of Comments Posted');
}

// This function executes when a user bookmarks a post in Community
function postBookmarked(post) {
    mixpanel.track("Post Bookmarked", {
        "Question": post.question, 
        "Topic Tags": post.tags
    });
    mixpanel.people.increment('# of Posts Bookmarked');
}

// This function executes when a user removes a bookmark from a post
function postUnbookmarked(post) {
    mixpanel.track("Post Bookmark Removed", {
        "Question": post.question
    });
    mixpanel.people.increment('# of Posts Bookmarked', -1);
}

// This function executes when a user views the Articles landing page
function articlesViewed() {
    mixpanel.track("Articles Dashboard Viewed", {
        "Page Variant": article.variant, 
        "Triggered On": article.variant, 
        "CTA": article.button, 
        "Langauge": article.lang
    });
}

// This function executes when a user views an Article
function articleViewed(article) {
    mixpanel.track("Article Viewed", {
        "Articles Section": article.section, 
        "Article Title": article.title, 
        "Topic Tags": article.tags, 
        "Triggered On": article.trig_subdir, 
        "Langauge": article.lang
    });
    mixpanel.people.increment('# of Articles Viewed');
}

// This function executes when a user searches 
function articlesSearched(page) {
    mixpanel.track("Articles Searched", {
        "Search Keywords": page.keywords
    });
}

// This function executes every time a user bookmarks an article
function articleBookmarked(article) {
    mixpanel.track("Article Bookmarked", {
        "Title": article.title, 
        "Topic Tags": article.tags
    });
    mixpanel.people.append("Reading List", article.title);
    mixpanel.people.increment("# of Articles Bookmarked");
}

// This function executes every time a user a user removes a bookmark from an article
function articleUnbookmarked(article) {
    mixpanel.track("Article Unbookmarked", {
        "Title": article.title
    });
    mixpanel.people.increment("# of Articles Bookmarked", -1);
    mixpanel.people.remove("Reading List", article.title);
}