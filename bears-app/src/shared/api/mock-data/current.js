const content = `{
  "data": {
    "lifeEventForm": {
      "id": "death",
      "timeEstimate": "60 minutes",
      "titlePrefix": "",
      "title": "Find federal benefits after the loss of a loved one",
      "summary": "<p>Find government survivor benefits including funeral benefits, housing, and education help.</p>",
      "sectionsEligibilityCriteria": [
        {
          "section": {
            "heading": "About the applicant",
            "description": "<p>About the person looking for benefits</p>",
            "fieldsets": [
              {
                "fieldset": {
                  "criteriaKey": "applicant_date_of_birth",
                  "legend": "Date of birth:",
                  "required": "TRUE",
                  "hint": "Applicant's DOB: 1969/08/15",
                  "inputs": [
                    {
                      "inputCriteria": {
                        "id": "applicant_date_of_birth",
                        "type": "Date",
                        "name": "applicant_date_of_birth",
                        "label": "Date of birth",
                        "hasChild": "FALSE",
                        "childDependencyOption": "",
                        "values": [
                          {
                            "default": "",
                            "value": {}
                          }
                        ]
                      }
                    }
                  ],
                  "children": []
                }
              },
              {
                "fieldset": {
                  "criteriaKey": "applicant_relationship_to_the_deceased",
                  "legend": "Applicant’s relationship to the deceased:",
                  "required": "TRUE",
                  "hint": "",
                  "inputs": [
                    {
                      "inputCriteria": {
                        "id": "applicant_relationship_to_the_deceased",
                        "type": "Select",
                        "name": "applicant_relationship_to_the_deceased",
                        "label": "Applicant's relationship to the deceased",
                        "hasChild": "FALSE",
                        "childDependencyOption": "",
                        "values": [
                          {
                            "option": "Spouse",
                            "value": "Spouse"
                          },
                          {
                            "option": "Child",
                            "value": "Child"
                          },
                          {
                            "option": "Parent",
                            "value": "Parent"
                          },
                          {
                            "option": "Other family member",
                            "value": "Other family member"
                          },
                          {
                            "option": "Personal or official representative",
                            "value": "Personal or official representative"
                          }
                        ]
                      }
                    }
                  ],
                  "children": []
                }
              },
              {
                "fieldset": {
                  "criteriaKey": "applicant_marital_status",
                  "legend": "Marital Status",
                  "required": "TRUE",
                  "hint": "",
                  "inputs": [
                    {
                      "inputCriteria": {
                        "id": "applicant_marital_status",
                        "type": "Select",
                        "name": "applicant_marital_status",
                        "label": "Marital status",
                        "hasChild": "FALSE",
                        "childDependencyOption": "",
                        "values": [
                          {
                            "option": "Married",
                            "value": "Married"
                          },
                          {
                            "option": "Unmarried",
                            "value": "Unmarried"
                          },
                          {
                            "option": "Widowed",
                            "value": "Widowed"
                          },
                          {
                            "option": "Divorced",
                            "value": "Divorced"
                          }
                        ]
                      }
                    }
                  ],
                  "children": []
                }
              }
            ]
          }
        },
        {
          "section": {
            "heading": "About the deceased",
            "description": "<p>About the person who died</p>",
            "fieldsets": [
              {
                "fieldset": {
                  "criteriaKey": "deceased_date_of_death",
                  "legend": "Date of death",
                  "required": "TRUE",
                  "hint": "",
                  "inputs": [
                    {
                      "inputCriteria": {
                        "id": "deceased_date_of_death",
                        "type": "Date",
                        "name": "deceased_date_of_death",
                        "label": "Date of death",
                        "hasChild": "FALSE",
                        "childDependencyOption": "",
                        "values": [
                          {
                            "default": "",
                            "value": {}
                          }
                        ]
                      }
                    }
                  ],
                  "children": []
                }
              },
              {
                "fieldset": {
                  "criteriaKey": "deceased_date_of_funeral",
                  "legend": "Date of the funeral",
                  "required": "TRUE",
                  "hint": "",
                  "inputs": [
                    {
                      "inputCriteria": {
                        "id": "deceased_date_of_funeral",
                        "type": "Date",
                        "name": "deceased_date_of_funeral",
                        "label": "Date of funeral",
                        "hasChild": "FALSE",
                        "childDependencyOption": "",
                        "values": [
                          {
                            "default": "",
                            "value": {}
                          }
                        ]
                      }
                    }
                  ],
                  "children": []
                }
              },
              {
                "fieldset": {
                  "criteriaKey": "deceased_death_location_is_US",
                  "legend": "Did the person die in the U.S.?",
                  "required": "FALSE",
                  "hint": "",
                  "inputs": [
                    {
                      "inputCriteria": {
                        "id": "deceased_death_location_is_US",
                        "type": "Radio",
                        "name": "deceased_death_location_is_US",
                        "label": "Did the person die in the U.S.?",
                        "hasChild": "FALSE",
                        "childDependencyOption": "",
                        "values": [
                          {
                            "option": "Yes",
                            "value": "Yes"
                          },
                          {
                            "option": "No",
                            "value": "No"
                          }
                        ]
                      }
                    }
                  ],
                  "children": []
                }
              },
              {
                "fieldset": {
                  "criteriaKey": "deceased_paid_into_SS",
                  "legend": "Did the deceased ever work and pay Social Security taxes on their earnings?",
                  "required": "FALSE",
                  "hint": "",
                  "inputs": [
                    {
                      "inputCriteria": {
                        "id": "deceased_paid_into_SS",
                        "type": "Radio",
                        "name": "deceased_paid_into_SS",
                        "label": "Did the deceased ever work and pay Social Security taxes on their earnings?",
                        "hasChild": "FALSE",
                        "childDependencyOption": "",
                        "values": [
                          {
                            "option": "Yes",
                            "value": "Yes"
                          },
                          {
                            "option": "No",
                            "value": "No"
                          }
                        ]
                      }
                    }
                  ],
                  "children": []
                }
              },
              {
                "fieldset": {
                  "criteriaKey": "deceased_public_safety_officer",
                  "legend": "Was the deceased a public safety officer who died in the line of duty?",
                  "required": "FALSE",
                  "hint": "",
                  "inputs": [
                    {
                      "inputCriteria": {
                        "id": "deceased_public_safety_officer",
                        "type": "Radio",
                        "name": "deceased_public_safety_officer",
                        "label": "Was the deceased a public safety officer who died in the line of duty?",
                        "hasChild": "FALSE",
                        "childDependencyOption": "",
                        "values": [
                          {
                            "option": "Yes",
                            "value": "Yes"
                          },
                          {
                            "option": "No",
                            "value": "No"
                          }
                        ]
                      }
                    }
                  ],
                  "children": []
                }
              },
              {
                "fieldset": {
                  "criteriaKey": "deceased_miner",
                  "legend": "",
                  "required": "FALSE",
                  "hint": "",
                  "inputs": [
                    {
                      "inputCriteria": {
                        "id": "deceased_miner",
                        "type": "Radio",
                        "name": "deceased_miner",
                        "label": "Did the person work in the coal mines and their death was due to black lung disease (pneumoconiosis)?",
                        "hasChild": "FALSE",
                        "childDependencyOption": "",
                        "values": [
                          {
                            "option": "Yes",
                            "value": "Yes"
                          },
                          {
                            "option": "No",
                            "value": "No"
                          }
                        ]
                      }
                    }
                  ],
                  "children": []
                }
              },
              {
                "fieldset": {
                  "criteriaKey": "deceased_american_indian",
                  "legend": "Was the deceased a member of a federally recognized American Indian Tribe or Alaska Native?",
                  "required": "FALSE",
                  "hint": "",
                  "inputs": [
                    {
                      "inputCriteria": {
                        "id": "deceased_american_indian",
                        "type": "Radio",
                        "name": "deceased_american_indian",
                        "label": "Was the deceased a member of a federally recognized American Indian Tribe or Alaska Native?",
                        "hasChild": "FALSE",
                        "childDependencyOption": "",
                        "values": [
                          {
                            "option": "Yes",
                            "value": "Yes"
                          },
                          {
                            "option": "No",
                            "value": "No"
                          }
                        ]
                      }
                    }
                  ],
                  "children": []
                }
              },
              {
                "fieldset": {
                  "criteriaKey": "deceased_died_of_COVID",
                  "legend": "Did the person die of COVID-19?",
                  "required": "FALSE",
                  "hint": "",
                  "inputs": [
                    {
                      "inputCriteria": {
                        "id": "deceased_died_of_COVID",
                        "type": "Radio",
                        "name": "deceased_died_of_COVID",
                        "label": "Did the person die of COVID-19?",
                        "hasChild": "FALSE",
                        "childDependencyOption": "",
                        "values": [
                          {
                            "option": "Yes",
                            "value": "Yes"
                          },
                          {
                            "option": "No",
                            "value": "No"
                          }
                        ]
                      }
                    }
                  ],
                  "children": []
                }
              },
              {
                "fieldset": {
                  "criteriaKey": "deceased_served_in_active_military",
                  "legend": "Did the deceased serve in the active military, naval, or air service?",
                  "required": "FALSE",
                  "hint": "",
                  "inputs": [
                    {
                      "inputCriteria": {
                        "id": "deceased_served_in_active_military",
                        "type": "Radio",
                        "name": "deceased_served_in_active_military",
                        "label": "Did the deceased serve in active military service?",
                        "hasChild": "FALSE",
                        "childDependencyOption": "",
                        "values": [
                          {
                            "option": "Yes",
                            "value": "Yes"
                          },
                          {
                            "option": "No",
                            "value": "No"
                          }
                        ]
                      }
                    }
                  ],
                  "children": [
                    {
                      "fieldsets": [
                        {
                          "fieldset": {
                            "criteriaKey": "deceased_service_status",
                            "legend": "",
                            "required": "FALSE",
                            "hint": "",
                            "inputs": [
                              {
                                "inputCriteria": {
                                  "id": "deceased_service_status",
                                  "type": "Select",
                                  "name": "deceased_service_status",
                                  "label": "What was the service status of the deceased?",
                                  "hasChild": "FALSE",
                                  "childDependencyOption": "",
                                  "values": [
                                    {
                                      "option": "Active-duty service member",
                                      "value": "Active-duty service member"
                                    },
                                    {
                                      "option": "Discharged under conditions other than dishonorable",
                                      "value": "Discharged under conditions other than dishonorable"
                                    },
                                    {
                                      "option": "Retired from the service",
                                      "value": "Retired from the service"
                                    },
                                    {
                                      "option": "Member of the National Guard/Reserves",
                                      "value": "Member of the National Guard/Reserves"
                                    }
                                  ]
                                }
                              }
                            ],
                            "children": [
                              {
                                "fieldsets": [
                                  {
                                    "fieldset": {
                                      "criteriaKey": "deceased_military_death_circumstance",
                                      "legend": "",
                                      "required": "FALSE",
                                      "hint": "",
                                      "inputs": [
                                        {
                                          "inputCriteria": {
                                            "id": "deceased_military_death_circumstance",
                                            "type": "Radio",
                                            "name": "deceased_military_death_circumstance",
                                            "label": "Which option applies to the deceased?",
                                            "hasChild": "FALSE",
                                            "childDependencyOption": "",
                                            "values": [
                                              {
                                                "option": "Died while on active duty",
                                                "value": "Died while on active duty"
                                              },
                                              {
                                                "option": "Died while on inactive-duty training",
                                                "value": "Died while on inactive-duty training"
                                              },
                                              {
                                                "option": "Died as a result of a service-related disability/illness",
                                                "value": "Died as a result of a service-related disability/illness"
                                              },
                                              {
                                                "option": "Died while receiving/traveling to VA care",
                                                "value": "Died while receiving/traveling to VA care"
                                              },
                                              {
                                                "option": "Died while receiving/eligible for VA compensation",
                                                "value": "Died while receiving/eligible for VA compensation"
                                              }
                                            ]
                                          }
                                        }
                                      ],
                                      "children": [
                                        {
                                          "fieldsets": [
                                            {
                                              "fieldset": {
                                                "criteriaKey": "deceased_grave_headstone",
                                                "legend": "",
                                                "required": "FALSE",
                                                "hint": "",
                                                "inputs": [
                                                  {
                                                    "inputCriteria": {
                                                      "id": "deceased_grave_headstone",
                                                      "type": "Radio",
                                                      "name": "deceased_grave_headstone",
                                                      "label": "Is the person buried in a grave with a privately purchased headstone or in an unmarked grave?",
                                                      "hasChild": "FALSE",
                                                      "childDependencyOption": "",
                                                      "values": [
                                                        {
                                                          "default": "",
                                                          "value": {}
                                                        },
                                                        {
                                                          "option": "Yes",
                                                          "value": "Yes"
                                                        },
                                                        {
                                                          "option": "No",
                                                          "value": "No"
                                                        }
                                                      ]
                                                    }
                                                  }
                                                ],
                                                "children": [
                                                  {
                                                    "fieldsets": {}
                                                  }
                                                ]
                                              }
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  }
                                ]
                              }
                            ]
                          }
                        }
                      ]
                    }
                  ]
                }
              }
            ]
          }
        }
      ]
    },
    "benefits": [
      {
        "benefit": {
          "title": "COVID-19 funeral assistance",
          "summary": "<p>Financial assistance to coversome burial and funeral costs for people who died of COVID-19.</p>",
          "SourceLink": "https://www.fema.gov/disasters/coronavirus/economic/funeral-assistance",
          "SourceIsEnglish": "FALSE",
          "agency": {
            "title": " Federal Emergency Management Agency (FEMA)",
            "summary": "<p>Federal Emergency Management Agency (FEMA) offers support to people during natural disasters and national emergencies, including housing and funeral assistance.</p>",
            "lede": ""
          },
          "tags": [
            "Death of a loved one"
          ],
          "eligibility": [
            {
              "criteriaKey": "deceased_died_of_COVID",
              "label": "The deceased died due to COVID-19",
              "acceptableValues": [
                "Yes"
              ]
            },
            {
              "criteriaKey": "deceased_death_location_is_US",
              "label": "The deceased died in the U.S.",
              "acceptableValues": [
                "Yes"
              ]
            },
            {
              "criteriaKey": "deceased_date_of_death",
              "label": "The deceased died after May 20th, 2020",
              "acceptableValues": [
                ">01-20-2020 (died after May 20th, 2020)"
              ]
            },
            {
              "criteriaKey": "applicant_citizen_status",
              "label": "You are a U.S. citizen or eligible non-citizen",
              "acceptableValues": [
                "Yes"
              ]
            },
            {
              "criteriaKey": "applicant_paid_funeral_expenses",
              "label": "You paid for funeral/burial expenses",
              "acceptableValues": [
                "Yes"
              ]
            }
          ]
        }
      },
      {
        "benefit": {
          "title": "Lump-sum death benefit",
          "summary": "<p>Financial assistance of $255 to surviving spouses of a deceased person who qualified for Social Security benefits.</p>",
          "SourceLink": "https://www.ssa.gov/benefits/survivors/ifyou.html#h7",
          "SourceIsEnglish": "FALSE",
          "agency": {
            "title": "Social Security Administration (SSA)",
            "summary": "<p>Administers Social Security, as well as disability insurance, and other benefits.</p>",
            "lede": ""
          },
          "tags": [
            "Death of a loved one"
          ],
          "eligibility": [
            {
              "criteriaKey": "deceased_paid_into_SS",
              "label": "The deceased worked and paid Social Security taxes",
              "acceptableValues": [
                "Yes"
              ]
            },
            {
              "criteriaKey": "deceased_date_of_death",
              "label": "The deceased died within the last two years",
              "acceptableValues": [
                "<2years (the deceased died within the last two years)"
              ]
            },
            {
              "criteriaKey": "applicant_citizen_status",
              "label": "You are a U.S. citizen or eligible non-citizen",
              "acceptableValues": [
                "Yes"
              ]
            },
            {
              "criteriaKey": "applicant_relationship_to_the_deceased",
              "label": "Your relationship to the deceased is: spouse or child",
              "acceptableValues": [
                "Spouse",
                "Child"
              ]
            }
          ]
        }
      }
    ]
  },
  "method": "GET",
  "status": 200
}
`

export default content
