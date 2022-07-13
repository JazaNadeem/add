var botui = new BotUI('thermostat-bot');
params.matter = "-";
params.subject = "-";
params.city = "-";
params.name = "-";
params.phone = "-";
params.query = "-";
//var chatLocation = $("#chatLocation").val();
//var uniqueness = Date.now() + Math.floor(Math.random() * 10) + 1;

function initBot() {
    if (proceed) {
        return;
    }
    playSound(1000)
    botui.message
        .bot({
            delay: 1000,
            loading: true,
            type: 'html',
            content: 'Hello!!'
        }).then(function() {
            return botui.message.bot({
                delay: 2000,
                loading: true,
                type: 'html',
                content: 'Please select your Legal Matter!'
            })
        }).then(function() {
            playSound(500)
            return botui.action.button({
                delay: 500,
                loading: true,
                action: [{
                        text: 'Property / Land Matter',
                        value: 'Property / Land Matter'
                    }, {
                        text: 'Cyber Crime Law',
                        value: 'Cyber Crime Law'
                    },
                    {
                        text: 'Divorce Matter',
                        value: 'Divorce Matter'
                    }, {
                        text: 'Family / Marriage Law',
                        value: 'Family / Marriage Law'
                    },
                    {
                        text: 'Landlord / Tenant Matter',
                        value: 'Landlord / Tenant Matter'
                    }, {
                        text: 'Documentation',
                        value: 'Documentation'
                    },
                    {
                        text: 'Company / Business/ Startup Matter',
                        value: 'Company / Business/ Startup Matter'
                    },
                    {
                        text: 'Muslim Law',
                        value: 'Muslim Law'
                    }, {
                        text: 'Employment / Labour Law',
                        value: 'Employment / Labour Law'
                    },
                    {
                        text: 'Consumer Court Matter',
                        value: 'Consumer Court Matter'
                    }, {
                        text: 'Banking Law',
                        value: 'Banking Law'
                    },
                    {
                        text: 'Cheque Bounce',
                        value: 'Cheque Bounce'
                    }, {
                        text: 'Recovery Matter',
                        value: 'Recovery Matter'
                    },
                    {
                        text: 'Criminal Matter',
                        value: 'Criminal Matter'
                    }, {
                        text: 'Other Civil Matters',
                        value: 'Other Civil Matters'
                    }
                ]
            })
        }).then(function(res) {
            params.matter = res.value;
            submitInfo()
            playSound(2000)
            botui.message
                .bot({
                    delay: 2000,
                    loading: true,
                    type: 'html',
                    content: 'Help me to understand which service you need?'
                })
            return botui.action.button({
                delay: 2000,
                loading: true,
                action: [
                    //                {text: 'I want only Advice', value: 'ask_query'}, 
                    {
                        text: 'I need to talk to Lawyer',
                        value: 'talk_to_lawyer'
                    },
                    {
                        text: 'I want to send/reply a Legal Notice',
                        value: 'legal_notice'
                    },
                    {
                        text: 'I want to file a case',
                        value: 'file_case'
                    },
                    {
                        text: 'I want to hire a Lawyer',
                        value: 'hire_lawyer'
                    }
                ]
            })
        }).then(function(res) {
            playSound(2000)
            params.subject = res.text;
            submitInfo()
            //        if (res.value == 'ask_query') {
            //            $(".chat-footer").delay(2000).fadeIn();
            //            return botui.message.bot({
            //                delay: 2000,
            //                loading: true,
            //                type: 'html',
            //                content: '<a style="text-decoration:underline;color:blue;" data-toggle="modal" onclick="hideChatBot();" data-target="#qyeryModal" target="_blank">Click here</a> to ask your query. Lawyers will give legal advice on your query.'
            //            });
            //        }
            //        else if (res.value == 'online_consultation') {
            //            $(".chat-footer").delay(2000).fadeIn();
            //            return botui.message.bot({
            //                delay: 2000,
            //                loading: true,
            //                type: 'html',
            //                content: '<a style="text-decoration:underline;color:blue;" class="razorpay-advice">Click here</a> to Book Instant Consultation'
            //            });
            //        }
            //        else {
            var message = ""
            if (res.value == 'legal_notice') {
                message = 'Our expert will help you to Send/Reply a Legal Notice for <b>' + params.matter.replace('Matter', '') + ' Matter</b>'
            } else if (res.value == 'file_case') {
                message = 'Our expert will help you to file a case for <b>' + params.matter.replace('Matter', '') + ' Matter</b>'
            } else if (res.value == 'hire_lawyer' || res.value == 'talk_to_lawyer') {
                message = 'Our expert will help you for your <b>' + params.matter.replace('Matter', '') + ' Matter</b>'
            }
            botui.message.bot({
                delay: 2000,
                loading: true,
                type: 'html',
                content: message
            }).then(function(res) {
                playSound(2000)
                botui.message.bot({
                    delay: 2000,
                    loading: true,
                    type: 'html',
                    content: 'Can I get your <b>Name</b>, please?'
                })
                return botui.action.text({
                    delay: 2000,
                    action: {
                        sub_type: 'text',
                        placeholder: 'Enter Your Name here'
                    }
                })
            }).then(function(res) {
                params.name = res.value;
                submitInfo()
                playSound(2000)
                botui.message.bot({
                    delay: 2000,
                    loading: true,
                    type: 'html',
                    content: '<b>' + params.name + '</b>, Please Select your <b>City</b>!'
                })
                return botui.action.button({
                    delay: 2500,
                    loading: true,
                    action: [{
                            text: 'Delhi',
                            value: 'Delhi'
                        }, {
                            text: 'Gurgaon',
                            value: 'Gurgaon'
                        },
                        {
                            text: 'Noida',
                            value: 'Noida'
                        }, {
                            text: 'Mumbai',
                            value: 'Mumbai'
                        },
                        {
                            text: 'Bangalore',
                            value: 'Bangalore'
                        }, {
                            text: 'Pune',
                            value: 'Pune'
                        },
                        {
                            text: 'Hyderabad',
                            value: 'Hyderabad'
                        }, {
                            text: 'Chennai',
                            value: 'Chennai'
                        },
                        {
                            text: 'Kolkata',
                            value: 'Kolkata'
                        }, {
                            text: 'Ahmedabad',
                            value: 'Ahmedabad'
                        },
                        {
                            text: 'Other City',
                            value: 'Other City'
                        }
                    ]
                })
            }).then(function(res) {
                if (res.value != 'Other City') {
                    return res.value;
                } else {
                    playSound(1000)
                    botui.message.bot({
                        delay: 1000,
                        type: 'html',
                        loading: true,
                        content: 'Please provide your <b>City</b>'
                    });
                    return botui.action.text({
                        delay: 1100,
                        action: {
                            sub_type: 'text',
                            placeholder: 'Enter City'
                        }
                    })
                }
            }).then(function(res) {
                if (res.value) {
                    params.city = res.value
                } else {
                    params.city = res
                }
                playSound(1000)
                submitInfo()
                botui.message.bot({
                    delay: 1000,
                    loading: true,
                    type: 'html',
                    content: 'And your <b>Mobile Number</b> please?'
                });
                return botui.action.text({
                    delay: 1100,
                    action: {
                        sub_type: 'tel',
                        value: '+91-',
                        size: 30,
                        placeholder: 'Enter Contact Details'
                    }
                })
            }).then(function(res) {
                params.phone = res.value
                submitInfo();
                playSound(2000)
                botui.message.bot({
                    delay: 2000,
                    loading: true,
                    type: 'html',
                    content: 'Superb! Would you like to book a <b>Phone Consultation</b> with an Expert Lawyer now by paying ₹ 999 only?'
                });
                return botui.action.button({
                    delay: 2000,
                    loading: true,
                    action: [{
                        text: 'Yes',
                        value: 'Yes'
                    }, {
                        text: 'No',
                        value: 'No'
                    }]
                })
            }).then(function(res) {
                if (res.value == 'Yes') {
                    params.query = "User Clicked on Instant Consultation";
                    submitInfo()
                    playSound(1000)
                    return botui.message.bot({
                        delay: 1000,
                        type: 'html',
                        loading: true,
                        content: '<a style="text-decoration:underline;color:blue;" href="https://www.vkeel.com/checkout/service/1" target="_blank" class="razorpay-advice">Click here</a> to Book Instant Consultation'
                    });
                } else {
                    playSound(2100)
                    botui.message.bot({
                        delay: 2000,
                        //                        loading: true,
                        type: 'html',
                        content: "Thank you, " + params.name + ". I've shared your details with our Expert. Someone will get in touch with you soon. Have a great day!"
                    });
                    playSound(4100)
                    return botui.message.bot({
                        delay: 4000,
                        loading: true,
                        type: 'html',
                        content: 'You can also raise your query by <a style="text-decoration:underline;color:blue;" data-toggle="modal" onclick="hideChatBot();" data-target="#qyeryModal" target="_blank">Clicking here</a> to get suggestons from Lawyers.'
                    });
                    //                    botui.message.bot({
                    //                        delay: 1000,
                    //                        loading: true,
                    //                        type: 'html',
                    //                        content: 'Please provide your Query in brief, if any. <br> Press Enter when you are done!'
                    //                    });
                    //                    return botui.action.text({
                    //                        delay: 1100,
                    //                        action: {
                    //                            sub_type: 'text',
                    //                            placeholder: 'Enter Your Query here...'
                    //                        }
                    //                    })

                }
            })
            //                    .then(function (res) {
            //                if (res.value) {
            //                    query = res.value;
            //                    submitInfo()
            //                    playSound(1200)
            //                    botui.message.bot({
            //                        delay: 1200,
            //                        loading: true,
            //                        content: "Thank you, " + name + ". I've shared your details with our Expert. Someone will get in touch with you soon. Have a great day!"
            //                    });
            //                }
            //            });
        })
    proceed = true;
}