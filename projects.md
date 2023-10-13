After 17 years working on research and development of knee replacement devices, my redundancy from DePuy in September 2023 has provided me with the opportunity to consider my future career in healthcare technology. Over recent months I have had many great conversations, some with people I have known most or all of my life, and others with people I have only just met. These conversations have highlighted the importance of considering not only _what_ I do for work, but _why_ I do it. As we move into this period where Data & DHT will have significant societal impact, training is readily available to learn the new skills I need to support _what_ work I do. However, learning about _why_ I do that work is more of a personal exploration. This page is part of that personal exploration, and contains a collection of thoughs, ideas and potential projects that I feel I would highly motived to do, and interesting to work on.
If any of this interested you enough to get in touch please reach out through [LinkedIn](https://www.linkedin.com/in/david-wolfson-6149a38/ "LinkedIn").

## resources 
There was a lot of useful learning from #ldf2023 that might help with this, especially the hack at Aire Innovates. 
  * [SNOMED](https://www.snomed.org/) 
  * [FHIR UK Core](https://digital.nhs.uk/services/fhir-uk-core)
  * https://simplifier.net/HL7FHIRUKCoreR4/~guides
  * https://simplifier.net/guide/uk-core-implementation-guide?version=current

There were also some groups using **Open resources**. I really like this approach and there are many advantages to working in the open wherever possible [citation needed!]. While I'm not working for any particular organisation, it is a great opportunity for me to expore the 'Open' sector and gives me some real material to work with:
  * Of particular interest is the [Open Data Saves Lives](https://opendatasaveslives.org/) project.
  * I'd like to read more about the [open outcomes](ahttps://apperta.org/openOutcomes/) project as well. This may have some info under the [Apperta Foundation gitHub](https://github.com/AppertaFoundation), and the [Clinical Knowledge Manager /(CKM)](https://ckm.apperta.org/ckm/) also looks interesting. 
  * [openEHR](https://openehr.org/) which [Ian McNicoll](https://www.linkedin.com/in/ianmcnicoll/) told me about, in particualr, see the [specifications](https://specifications.openehr.org/) section.
  * [UKCore Hackathon materials](https://simplifier.net/guide/UKCore-Hackathon/)

## Digitisation of patient monitoring
Digitisation of health data is beneficial for individuals (they get better treatment) and the population (improved health and effiencies), and is a stated aim of the [NHS long-term plan](https://www.longtermplan.nhs.uk/online-version/chapter-5-digitally-enabled-care-will-go-mainstream-across-the-nhs/). While implementing new technology (e.g. connecting patient monitoring to wifi) is an obvious step for this, there is as significant estate of un-connected devices in use (e.g. [220,000 BP monitors distributed to peoples homes in 2020](https://www.england.nhs.uk/ourwork/clinical-policy/cvd/home-blood-pressure-monitoring/#:~:text=Since%20October%202020%2C%20over%20220%2C000,via%20a%20remote%20monitoring%20platform.)). The aim of this project would be to bridge the transition to connected monitoring, but providing tools to digitise that data. 

  
However, both these tools require accurate human transposition of the data. 
### aims: 
create an app to capture BP reading from a patient monitor (home, primary or secondary care) using vision and push this directly to an EHR?

### benefits:
  * reduce transposition errors
  * increase uptake of home monitoring
  * enable digitisation of data from existing estate (est. as hundreds-of-thousands) of un-connected monitors already in hospitals, clinics and peoples homes...

### feasibility:
  * In 2021 a [paper](https://www.frontiersin.org/articles/10.3389/frai.2021.543176/full) was published that demonstrated proof of concept that smartphone technolgy can be used to automate this transposition (the code available via the [BPimageTranscribe github repo](https://github.com/cliffordlab/BPimageTranscribe)).
  * [Florence](https://florence.community/) (or Flo) is text message based system for home blood pressure reporting (Ian McNicoll also told me about this), and there has been a specific [NHS initiative on Home monitoring of blood pressure(BP)](https://www.england.nhs.uk/ourwork/clinical-policy/cvd/home-blood-pressure-monitoring/) _Does this flow directly to an EHR, or could a workflow be created to do so?_
  * the NHS App has the facility for home reporting of BP, but it is burried extremely deep. _How can the usability of this be improved for increased uptake?_
  note: BP also forms part of the [news2](https://www.rcplondon.ac.uk/projects/outputs/national-early-warning-score-news-2) parameters. Could these be usefully put into an app? Some of these are subjective, so digitising their definition might be useful. It'd take significant validation though.

## the under-treated
<details>
	<summary>further background reading</summary>
<ul>
	<li><a href="https://www.longtermplan.nhs.uk/online-version/">NHS Long Term Plan</a></li>
	<li><a href="https://www.health.org.uk/publications/reports/the-marmot-review-10-years-on">the marmot review 10 years on</a></li>
	<li><a href="https://www.nesta.org.uk/report/open-innovation-in-health-a-guide-to-transforming-healthcare-through-collaboration/">nesta report on open innovation in health</a></li>
</ul>
	
</details>
  While the clinical practice of medicine is focused on aliviating the symptoms of acutely or chronically unwell patients, healthcare research and development aims to enable clinicians to treat more patients. Often, we thing of this as using new knowledge or technology to diagnose or treat a cohort of patients with a specific condition who are currently _un-treatable_. However, there are other (large?) cohorts of patients who are not able to access established standard-of-care treatment, and are therefore _under-treated_. Each of these groups of patients are important, but the focus of this invetigation is to explore the role of Data and Digital Health Technology (DHT) in understanding and addressing the the _under-treated_.
  Further to this, we might also consider that the 'Healthcare' sector (and spending) is largely focused on treating illness rather than maintaining health (indeed, we might consider that in the UK we actually have a 'National Illness Service'!). However, there are large number of patients suffering from diseases which could be treated (or prevented) through lifestyle changes. So called "lifestyle medicine" has clear benefits to patients, and reduces the burden on healthcare system, and so these types of treatments or interventions are also be to explored here. 
### what to treat
There is an NHS initiative called ["Core20PLUS5"](https://www.england.nhs.uk/about/equality/equality-hub/national-healthcare-inequalities-improvement-programme/core20plus5/) which describes "an approach to reducing healthcare inequalities". 
* Core20 - The most deprived 20% of the national population
* PLUS population groups should be identified at a local level (**ACTION:** what are local to West Yorkshire ICB?)
* There are five clinical areas of focus which require accelerated improvement
  1. Maternity
  2. Severe mental illness (SMI)
  3. Chronic respiratory disease
  4. Early cancer diagnosis
  5. Hypertension case-finding and optimal management and lipid optimal management
 
### who/where to treat 
In the past, healthcare has been (unintentionaly?) focused on a privileged minority. By collating and analysing healthcare data with modern tools and techniques, it is now clear that not only are there significant health inequalities in our society, but who (and where) those undersevered population are. The sad but unsurprising fact is that these may be the same populations that have suffered other inequalities through deliberate discrimination such as racism, sexisim or class discrimation. Natural Justice dictates that we now use health inequality data to prioritise activities in areas of high health inequality.
#### Helath inequality data sources
On 4th October 2023 I joined a part of "ONS Local presents: Health Inequalities Explorer Tool webinar". This introduced a series of tools for makring helath inequalities. Slides were also provided on e-mail. 
* [The Local Inequalities Explorer Tool](https://app.powerbi.com/view?r=eyJrIjoiMzI1N2YwYmYtNWVhMy00ZWY5LTliNmMtYzk3ZWVmMmMzNjZkIiwidCI6ImVlNGUxNDk5LTRhMzUtNGIyZS1hZDQ3LTVmM2NmOWRlODY2NiIsImMiOjh9) (Microsoft Power BI)  
* Local Health - Public Health Data for small geographic areas can be found on [OHID’s fingertips platform](https://fingertips.phe.org.uk/profile/local-health)
* [Geographical Information System (GIS) Version of Local Health](https://www.localhealth.org.uk/) This includes additional GIS features and functionality to create reports and bespoke area geographies.
* Local Inequalities Explorer Tool wiki pages (to find further information and link to data download files) you will need to be registered for Knowledge Hub and a member of the OHID National Health Intelligence group. If you are not already registered with Knowledge Hub you can do this at the [Knowledge Hub](khub.net)

ACTION: Review this for local data to West Yorkhire ICB/NOE

note: also consider if these areas are also areas of digital inequality/poverty...
### what to do
#### Lifestyle Medicine
see the [british society of lifesytle medicine](https://bslm.org.uk/)
social engineering through social media/advertising?
#### Joint replacement
since this is where my background, and that of many of my contact is, it is natural to look at this field. As of October 2023 I've not conducted a formal review, but here are a couple of interesting 'quick finds':
* [Inequalities in provision of hip and knee replacement surgery for osteoarthritis by age, sex, and social deprivation in England between 2007–2017: A population-based cohort study of the National Joint Registry](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10138460/#:~:text=For%20publicly%20funded%20surgery%2C%20no,were%20observed%20for%20both%20joints.) "Conclusions: In this study, we found that there were inequalities, which remained constant over time, especially in the provision of hip replacement, by degree of social deprivation. Providers of healthcare need to take action to reduce this unwarranted variation in provision of surgery."
* [NJR](https://www.njrcentre.org.uk/) and the [NJR github](https://github.com/NationalJointRegistry/Datasets/tree/main) 


### how to fund it
