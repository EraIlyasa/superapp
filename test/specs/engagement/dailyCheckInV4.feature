Feature: Login functionality and daily check-in for SuperApp

        Scenario: Login with valid credentials and navigate to daily check-in
            Given I send login url
             When I login with credential
             Then I see usernameDisplay
             When I click marketing menus
             When I click DailyCheck In menu
             When I click Rewards menu
             Then I should verify the page title is DailyCheckInRewards
             Then I should verify subtitleRewards
             Then I should verify totalRewards
             Then I should verify totalCustomsRewards
             Then I should verify listTableGroup
             When I click record per page
             When I click content 20 item
             When I click last page
             When I click edit rewards
             Then I should verify edit rewards title
             When I click backButton
             When I click Dashboard
             When I click marketingMenuV4
             When I click dailyCheckInV4Menu
             When I click rewardsV4Menu
             Then I should verify breadcrumbRewardsV4
             Then I should verify titleDailyCheckInRewardsV4
             Then I should verify subtitleDailyCheckInRewardsV4
             Then I should verify listTableRewardsV4
             When I click editRewardsV4
             Then I should verify titleEditRewardsV4
             Then I should verify dayRewardsTableV4
             Then I should verify rewardTypeTableV4
             Then I should verify rewardValueTableV4
             When I click downListRewardsV4
             When I click rewardsTypeIsPoinV4
             When I click clearIconButtonRewardsV4
             When I input jumlahPoinRewardsV4
             Then I should verify iconRewardsTypeV4
             When I click buttonSimpanRewardsV4