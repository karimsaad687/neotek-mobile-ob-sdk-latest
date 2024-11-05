export const getAccountsLinksData = {
  Data: {
    AccountsLinks: [
      {
        AccountsLinkId: '151047981299493468387497592039',
        PSUId: '255cc',
        UserLoginId: 'RJHISARI_',
        FinancialInstitution: {
          FinancialInstitutionId: 'BSFRSARI',
          NameEn: 'Banque Saudi Fransi',
          NameAr: 'البنك السعودي الفرنسي',
          Nickname: 'Test12349',
        },
        CreationDateTime: '2024-08-27T12:43:55.295Z',
        Status: 'Revoked',
        StatusUpdateDateTime: '2024-08-28T20:42:10.952Z',
        Accounts: [
          '432f171f-ec17-48f4-832c-ff37c19d2da3',
          'e04e4f47-c389-47a2-ba66-2817eb5f617e',
          '1051bd75-4ab0-43b7-b9ba-a1c6fdc782c5',
        ],
        DataGroups: [
          {
            DataGroupId: 'AccountDetails',
            DescriptionEn: 'Your Account Details',
            DescriptionAr: 'تفاصيل وبيانات الحساب',
            Permissions: [
              {
                ResourceId: 'accounts',
                ResourceDescriptionEn: 'Accounts',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadAccountsBasic',
                PermissionDescriptionEn:
                  'Any other name by which you refer to this account',
                PermissionDescriptionAr: 'لاسم المختصر لحسابك',
              },
              {
                ResourceId: 'accounts',
                ResourceDescriptionEn: 'Accounts',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadAccountsDetail',
                PermissionDescriptionEn: 'Your account name and number',
                PermissionDescriptionAr: 'معلومات وتفاصيل حساب',
              },
              {
                ResourceId: 'balances',
                ResourceDescriptionEn: 'Balances',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadBalances',
                PermissionDescriptionEn: 'Your account balance',
                PermissionDescriptionAr: 'رصيد حسابك',
              },
            ],
          },
          {
            DataGroupId: 'RegularPayments',
            DescriptionEn: 'Your Regular Payments',
            DescriptionAr: 'بيانات عمليات المدفوعات',
            Permissions: [
              {
                ResourceId: 'standing-orders',
                ResourceDescriptionEn: 'Standing Orders',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadStandingOrdersDetail',
                PermissionDescriptionEn: 'Details of your Standing Orders',
                PermissionDescriptionAr: 'الآوامر المستدامة',
              },
              {
                ResourceId: 'direct-debits',
                ResourceDescriptionEn: 'Direct Debits',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadDirectDebits',
                PermissionDescriptionEn: 'Your Direct Debits\t',
                PermissionDescriptionAr: 'تفاصيل عن الحسم المباشر',
              },
              {
                ResourceId: 'scheduled-payments',
                ResourceDescriptionEn: 'Scheduled Payments',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadScheduledPaymentsBasic',
                PermissionDescriptionEn:
                  'Recurring and future dated payments from your card account',
                PermissionDescriptionAr: 'مدفوعات بطاقتك المتكررة والمجدولة',
              },
              {
                ResourceId: 'scheduled-payments',
                ResourceDescriptionEn: 'Scheduled Payments',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadScheduledPaymentsDetail',
                PermissionDescriptionEn:
                  'Details of recurring and future dated payments from your card account\t',
                PermissionDescriptionAr: '',
              },
              {
                ResourceId: 'beneficiaries',
                ResourceDescriptionEn: 'Beneficiaries',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadBeneficiariesBasic',
                PermissionDescriptionEn: 'Payee agreements you have set up',
                PermissionDescriptionAr: 'اسماء المعرفيين والمستفيدين بحسابك',
              },
              {
                ResourceId: 'beneficiaries',
                ResourceDescriptionEn: 'Beneficiaries',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadBeneficiariesDetail',
                PermissionDescriptionEn:
                  'Details of Payee agreements you have set up',
                PermissionDescriptionAr: 'تفاصيل المعرفيين والمستفيدين بحسابك',
              },
              {
                ResourceId: 'standing-orders',
                ResourceDescriptionEn: 'Standing Orders',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadStandingOrdersBasic',
                PermissionDescriptionEn: 'Your Standing Orders',
                PermissionDescriptionAr: 'الطلبات القائمة',
              },
            ],
          },
          {
            DataGroupId: 'PartyDetails',
            DescriptionEn: 'Contact and party details',
            DescriptionAr: 'المعلومات الشخصية',
            Permissions: [
              {
                ResourceId: 'parties',
                ResourceDescriptionEn: 'Parties',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadPartyPSU',
                PermissionDescriptionEn:
                  'The name of the account and your full legal name.\r\nOptionally this can also include your address, telephone numbers and email',
                PermissionDescriptionAr:
                  'اسم الحساب والاسم الكامل لصاحب الحساب، بالإضافة إلى العنوان البريدي',
              },
              {
                ResourceId: 'parties',
                ResourceDescriptionEn: 'Parties',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadPartyPSUIdentity',
                PermissionDescriptionEn:
                  'The name of the account, address, date of birth, national ID and residency number\tThe account name, address, date of birth, national ID and residency number',
                PermissionDescriptionAr:
                  'الاسم والعنوان البريدي وتاريخ الميلاد ومعلومات الهوية او الإقامة',
              },
              {
                ResourceId: 'parties',
                ResourceDescriptionEn: 'Parties',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadParty',
                PermissionDescriptionEn:
                  'The name of the account and the full legal name(s) of all parties.\r\nOptionally this can also include their address or addresses, telephone ',
                PermissionDescriptionAr:
                  'اسم ومعلومات صاحب الحساب والعنوان البريدي ',
              },
            ],
          },
          {
            DataGroupId: 'AccountTransactions',
            DescriptionEn: 'Your Account Transactions',
            DescriptionAr: 'تفاصيل عمليات الحساب',
            Permissions: [
              {
                ResourceId: 'transactions',
                ResourceDescriptionEn: 'Transactions',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadTransactionsCredits',
                PermissionDescriptionEn:
                  'Details of your incoming transactions',
                PermissionDescriptionAr: 'تفاصيل عن العمليات الواردة',
              },
              {
                ResourceId: 'transactions',
                ResourceDescriptionEn: 'Transactions',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadTransactionsDebits',
                PermissionDescriptionEn:
                  'Details of your outgoing transactions',
                PermissionDescriptionAr: 'تفاصيل عن العمليات المنفذة',
              },
              {
                ResourceId: 'transactions',
                ResourceDescriptionEn: 'Transactions',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadTransactionsBasic',
                PermissionDescriptionEn: 'Your transactions',
                PermissionDescriptionAr: 'عمليات الحساب',
              },
              {
                ResourceId: 'transactions',
                ResourceDescriptionEn: 'Transactions',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadTransactionsDetail',
                PermissionDescriptionEn: 'Details of your transactions',
                PermissionDescriptionAr: 'تفاصيل عمليات الحساب',
              },
            ],
          },
        ],
        TransactionFromDateTime: '2023-12-31T22:00:00.000Z',
        TransactionToDateTime: '2025-08-26T12:43:52.626Z',
        LastDataSharedDateTime: '2024-08-28T20:42:04.547Z',
        AccountTypesList: ['KSAOB.Retail'],
        AccountSubTypesList: ['CurrentAccount'],
        OnBehalfOf: {
          TradingName: 'Acme Accounting Trading Name',
          LegalName: 'Acme Accounting Legal Name',
          IdentifierType: 'Other',
          Identifier: 'abcd1234',
        },
        PurposeList: ['Account Aggregation'],
        RevokedBy: 'KSAOB.TPP',
        SecurityProfile: 'Redirection',
      },
      {
        AccountsLinkId: '579813924436464322146195063950',
        PSUId: '255cc',
        UserLoginId: 'RJHISARI_',
        FinancialInstitution: {
          FinancialInstitutionId: 'SAMAModelBank',
          NameEn: 'SAMA Model Bank',
          NameAr: 'البنك المركزي السعودي',
        },
        CreationDateTime: '2024-08-27T13:34:30.183Z',
        Status: 'Pending',
        StatusUpdateDateTime: '2024-08-27T13:34:30.183Z',
        DataGroups: [
          {
            DataGroupId: 'AccountDetails',
            DescriptionEn: 'Your Account Details',
            DescriptionAr: 'تفاصيل وبيانات الحساب',
            Permissions: [
              {
                ResourceId: 'accounts',
                ResourceDescriptionEn: 'Accounts',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadAccountsBasic',
                PermissionDescriptionEn:
                  'Any other name by which you refer to this account',
                PermissionDescriptionAr: 'لاسم المختصر لحسابك',
              },
              {
                ResourceId: 'accounts',
                ResourceDescriptionEn: 'Accounts',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadAccountsDetail',
                PermissionDescriptionEn: 'Your account name and number',
                PermissionDescriptionAr: 'معلومات وتفاصيل حساب',
              },
              {
                ResourceId: 'balances',
                ResourceDescriptionEn: 'Balances',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadBalances',
                PermissionDescriptionEn: 'Your account balance',
                PermissionDescriptionAr: 'رصيد حسابك',
              },
            ],
          },
          {
            DataGroupId: 'RegularPayments',
            DescriptionEn: 'Your Regular Payments',
            DescriptionAr: 'بيانات عمليات المدفوعات',
            Permissions: [
              {
                ResourceId: 'standing-orders',
                ResourceDescriptionEn: 'Standing Orders',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadStandingOrdersDetail',
                PermissionDescriptionEn: 'Details of your Standing Orders',
                PermissionDescriptionAr: 'الآوامر المستدامة',
              },
              {
                ResourceId: 'direct-debits',
                ResourceDescriptionEn: 'Direct Debits',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadDirectDebits',
                PermissionDescriptionEn: 'Your Direct Debits\t',
                PermissionDescriptionAr: 'تفاصيل عن الحسم المباشر',
              },
              {
                ResourceId: 'scheduled-payments',
                ResourceDescriptionEn: 'Scheduled Payments',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadScheduledPaymentsBasic',
                PermissionDescriptionEn:
                  'Recurring and future dated payments from your card account',
                PermissionDescriptionAr: 'مدفوعات بطاقتك المتكررة والمجدولة',
              },
              {
                ResourceId: 'scheduled-payments',
                ResourceDescriptionEn: 'Scheduled Payments',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadScheduledPaymentsDetail',
                PermissionDescriptionEn:
                  'Details of recurring and future dated payments from your card account\t',
                PermissionDescriptionAr: '',
              },
              {
                ResourceId: 'beneficiaries',
                ResourceDescriptionEn: 'Beneficiaries',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadBeneficiariesBasic',
                PermissionDescriptionEn: 'Payee agreements you have set up',
                PermissionDescriptionAr: 'اسماء المعرفيين والمستفيدين بحسابك',
              },
              {
                ResourceId: 'beneficiaries',
                ResourceDescriptionEn: 'Beneficiaries',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadBeneficiariesDetail',
                PermissionDescriptionEn:
                  'Details of Payee agreements you have set up',
                PermissionDescriptionAr: 'تفاصيل المعرفيين والمستفيدين بحسابك',
              },
              {
                ResourceId: 'standing-orders',
                ResourceDescriptionEn: 'Standing Orders',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadStandingOrdersBasic',
                PermissionDescriptionEn: 'Your Standing Orders',
                PermissionDescriptionAr: 'الطلبات القائمة',
              },
            ],
          },
          {
            DataGroupId: 'AccountTransactions',
            DescriptionEn: 'Your Account Transactions',
            DescriptionAr: 'تفاصيل عمليات الحساب',
            Permissions: [
              {
                ResourceId: 'transactions',
                ResourceDescriptionEn: 'Transactions',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadTransactionsCredits',
                PermissionDescriptionEn:
                  'Details of your incoming transactions',
                PermissionDescriptionAr: 'تفاصيل عن العمليات الواردة',
              },
              {
                ResourceId: 'transactions',
                ResourceDescriptionEn: 'Transactions',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadTransactionsDebits',
                PermissionDescriptionEn:
                  'Details of your outgoing transactions',
                PermissionDescriptionAr: 'تفاصيل عن العمليات المنفذة',
              },
              {
                ResourceId: 'transactions',
                ResourceDescriptionEn: 'Transactions',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadTransactionsBasic',
                PermissionDescriptionEn: 'Your transactions',
                PermissionDescriptionAr: 'عمليات الحساب',
              },
              {
                ResourceId: 'transactions',
                ResourceDescriptionEn: 'Transactions',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadTransactionsDetail',
                PermissionDescriptionEn: 'Details of your transactions',
                PermissionDescriptionAr: 'تفاصيل عمليات الحساب',
              },
            ],
          },
          {
            DataGroupId: 'PartyDetails',
            DescriptionEn: 'Contact and party details',
            DescriptionAr: 'المعلومات الشخصية',
            Permissions: [
              {
                ResourceId: 'parties',
                ResourceDescriptionEn: 'Parties',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadPartyPSU',
                PermissionDescriptionEn:
                  'The name of the account and your full legal name.\r\nOptionally this can also include your address, telephone numbers and email',
                PermissionDescriptionAr:
                  'اسم الحساب والاسم الكامل لصاحب الحساب، بالإضافة إلى العنوان البريدي',
              },
              {
                ResourceId: 'parties',
                ResourceDescriptionEn: 'Parties',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadPartyPSUIdentity',
                PermissionDescriptionEn:
                  'The name of the account, address, date of birth, national ID and residency number\tThe account name, address, date of birth, national ID and residency number',
                PermissionDescriptionAr:
                  'الاسم والعنوان البريدي وتاريخ الميلاد ومعلومات الهوية او الإقامة',
              },
              {
                ResourceId: 'parties',
                ResourceDescriptionEn: 'Parties',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadParty',
                PermissionDescriptionEn:
                  'The name of the account and the full legal name(s) of all parties.\r\nOptionally this can also include their address or addresses, telephone ',
                PermissionDescriptionAr:
                  'اسم ومعلومات صاحب الحساب والعنوان البريدي ',
              },
            ],
          },
        ],
        TransactionFromDateTime: '2023-12-31T22:00:00.000Z',
        TransactionToDateTime: '2025-08-26T13:34:28.313Z',
        AccountTypesList: ['KSAOB.Retail'],
        AccountSubTypesList: ['CurrentAccount'],
        OnBehalfOf: {
          TradingName: 'Acme Accounting Trading Name',
          LegalName: 'Acme Accounting Legal Name',
          IdentifierType: 'Other',
          Identifier: 'abcd1234',
        },
        PurposeList: ['Account Aggregation'],
        SecurityProfile: 'Redirection',
      },
      {
        AccountsLinkId: '335231093568502548277655307539',
        PSUId: '255cc',
        UserLoginId: 'RJHISARI_',
        FinancialInstitution: {
          FinancialInstitutionId: 'BSFRSARI',
          NameEn: 'Banque Saudi Fransi',
          NameAr: 'البنك السعودي الفرنسي',
          Nickname: 'BFS1',
        },
        CreationDateTime: '2024-08-27T13:35:33.806Z',
        Status: 'Revoked',
        StatusUpdateDateTime: '2024-08-29T07:36:02.644Z',
        Accounts: [
          '432f171f-ec17-48f4-832c-ff37c19d2da3',
          'e04e4f47-c389-47a2-ba66-2817eb5f617e',
          '1051bd75-4ab0-43b7-b9ba-a1c6fdc782c5',
          '9c117c11-3796-4e77-988c-1c848cdf4fe3',
        ],
        DataGroups: [
          {
            DataGroupId: 'AccountDetails',
            DescriptionEn: 'Your Account Details',
            DescriptionAr: 'تفاصيل وبيانات الحساب',
            Permissions: [
              {
                ResourceId: 'accounts',
                ResourceDescriptionEn: 'Accounts',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadAccountsBasic',
                PermissionDescriptionEn:
                  'Any other name by which you refer to this account',
                PermissionDescriptionAr: 'لاسم المختصر لحسابك',
              },
              {
                ResourceId: 'accounts',
                ResourceDescriptionEn: 'Accounts',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadAccountsDetail',
                PermissionDescriptionEn: 'Your account name and number',
                PermissionDescriptionAr: 'معلومات وتفاصيل حساب',
              },
              {
                ResourceId: 'balances',
                ResourceDescriptionEn: 'Balances',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadBalances',
                PermissionDescriptionEn: 'Your account balance',
                PermissionDescriptionAr: 'رصيد حسابك',
              },
            ],
          },
          {
            DataGroupId: 'RegularPayments',
            DescriptionEn: 'Your Regular Payments',
            DescriptionAr: 'بيانات عمليات المدفوعات',
            Permissions: [
              {
                ResourceId: 'standing-orders',
                ResourceDescriptionEn: 'Standing Orders',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadStandingOrdersDetail',
                PermissionDescriptionEn: 'Details of your Standing Orders',
                PermissionDescriptionAr: 'الآوامر المستدامة',
              },
              {
                ResourceId: 'direct-debits',
                ResourceDescriptionEn: 'Direct Debits',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadDirectDebits',
                PermissionDescriptionEn: 'Your Direct Debits\t',
                PermissionDescriptionAr: 'تفاصيل عن الحسم المباشر',
              },
              {
                ResourceId: 'scheduled-payments',
                ResourceDescriptionEn: 'Scheduled Payments',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadScheduledPaymentsBasic',
                PermissionDescriptionEn:
                  'Recurring and future dated payments from your card account',
                PermissionDescriptionAr: 'مدفوعات بطاقتك المتكررة والمجدولة',
              },
              {
                ResourceId: 'scheduled-payments',
                ResourceDescriptionEn: 'Scheduled Payments',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadScheduledPaymentsDetail',
                PermissionDescriptionEn:
                  'Details of recurring and future dated payments from your card account\t',
                PermissionDescriptionAr: '',
              },
              {
                ResourceId: 'beneficiaries',
                ResourceDescriptionEn: 'Beneficiaries',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadBeneficiariesBasic',
                PermissionDescriptionEn: 'Payee agreements you have set up',
                PermissionDescriptionAr: 'اسماء المعرفيين والمستفيدين بحسابك',
              },
              {
                ResourceId: 'beneficiaries',
                ResourceDescriptionEn: 'Beneficiaries',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadBeneficiariesDetail',
                PermissionDescriptionEn:
                  'Details of Payee agreements you have set up',
                PermissionDescriptionAr: 'تفاصيل المعرفيين والمستفيدين بحسابك',
              },
              {
                ResourceId: 'standing-orders',
                ResourceDescriptionEn: 'Standing Orders',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadStandingOrdersBasic',
                PermissionDescriptionEn: 'Your Standing Orders',
                PermissionDescriptionAr: 'الطلبات القائمة',
              },
            ],
          },
          {
            DataGroupId: 'PartyDetails',
            DescriptionEn: 'Contact and party details',
            DescriptionAr: 'المعلومات الشخصية',
            Permissions: [
              {
                ResourceId: 'parties',
                ResourceDescriptionEn: 'Parties',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadPartyPSU',
                PermissionDescriptionEn:
                  'The name of the account and your full legal name.\r\nOptionally this can also include your address, telephone numbers and email',
                PermissionDescriptionAr:
                  'اسم الحساب والاسم الكامل لصاحب الحساب، بالإضافة إلى العنوان البريدي',
              },
              {
                ResourceId: 'parties',
                ResourceDescriptionEn: 'Parties',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadPartyPSUIdentity',
                PermissionDescriptionEn:
                  'The name of the account, address, date of birth, national ID and residency number\tThe account name, address, date of birth, national ID and residency number',
                PermissionDescriptionAr:
                  'الاسم والعنوان البريدي وتاريخ الميلاد ومعلومات الهوية او الإقامة',
              },
              {
                ResourceId: 'parties',
                ResourceDescriptionEn: 'Parties',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadParty',
                PermissionDescriptionEn:
                  'The name of the account and the full legal name(s) of all parties.\r\nOptionally this can also include their address or addresses, telephone ',
                PermissionDescriptionAr:
                  'اسم ومعلومات صاحب الحساب والعنوان البريدي ',
              },
            ],
          },
          {
            DataGroupId: 'AccountTransactions',
            DescriptionEn: 'Your Account Transactions',
            DescriptionAr: 'تفاصيل عمليات الحساب',
            Permissions: [
              {
                ResourceId: 'transactions',
                ResourceDescriptionEn: 'Transactions',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadTransactionsCredits',
                PermissionDescriptionEn:
                  'Details of your incoming transactions',
                PermissionDescriptionAr: 'تفاصيل عن العمليات الواردة',
              },
              {
                ResourceId: 'transactions',
                ResourceDescriptionEn: 'Transactions',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadTransactionsDebits',
                PermissionDescriptionEn:
                  'Details of your outgoing transactions',
                PermissionDescriptionAr: 'تفاصيل عن العمليات المنفذة',
              },
              {
                ResourceId: 'transactions',
                ResourceDescriptionEn: 'Transactions',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadTransactionsBasic',
                PermissionDescriptionEn: 'Your transactions',
                PermissionDescriptionAr: 'عمليات الحساب',
              },
              {
                ResourceId: 'transactions',
                ResourceDescriptionEn: 'Transactions',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadTransactionsDetail',
                PermissionDescriptionEn: 'Details of your transactions',
                PermissionDescriptionAr: 'تفاصيل عمليات الحساب',
              },
            ],
          },
        ],
        TransactionFromDateTime: '2023-12-31T22:00:00.000Z',
        TransactionToDateTime: '2025-08-26T13:35:31.492Z',
        LastDataSharedDateTime: '2024-08-29T07:35:07.241Z',
        AccountTypesList: ['KSAOB.Retail'],
        AccountSubTypesList: ['CurrentAccount'],
        OnBehalfOf: {
          TradingName: 'Acme Accounting Trading Name',
          LegalName: 'Acme Accounting Legal Name',
          IdentifierType: 'Other',
          Identifier: 'abcd1234',
        },
        PurposeList: ['Account Aggregation'],
        RevokedBy: 'KSAOB.TPP',
        SecurityProfile: 'Redirection',
      },
      {
        AccountsLinkId: '387289872172887416716171607888',
        PSUId: '255cc',
        UserLoginId: 'RJHISARI_',
        FinancialInstitution: {
          FinancialInstitutionId: 'BSFRSARI',
          NameEn: 'Banque Saudi Fransi',
          NameAr: 'البنك السعودي الفرنسي',
          Nickname: 'BSF1',
        },
        CreationDateTime: '2024-08-27T21:14:33.111Z',
        Status: 'Revoked',
        StatusUpdateDateTime: '2024-09-01T14:53:34.750Z',
        Accounts: [
          '432f171f-ec17-48f4-832c-ff37c19d2da3',
          'e04e4f47-c389-47a2-ba66-2817eb5f617e',
          '1051bd75-4ab0-43b7-b9ba-a1c6fdc782c5',
          '9c117c11-3796-4e77-988c-1c848cdf4fe3',
        ],
        DataGroups: [
          {
            DataGroupId: 'AccountDetails',
            DescriptionEn: 'Your Account Details',
            DescriptionAr: 'تفاصيل وبيانات الحساب',
            Permissions: [
              {
                ResourceId: 'accounts',
                ResourceDescriptionEn: 'Accounts',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadAccountsBasic',
                PermissionDescriptionEn:
                  'Any other name by which you refer to this account',
                PermissionDescriptionAr: 'لاسم المختصر لحسابك',
              },
              {
                ResourceId: 'accounts',
                ResourceDescriptionEn: 'Accounts',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadAccountsDetail',
                PermissionDescriptionEn: 'Your account name and number',
                PermissionDescriptionAr: 'معلومات وتفاصيل حساب',
              },
              {
                ResourceId: 'balances',
                ResourceDescriptionEn: 'Balances',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadBalances',
                PermissionDescriptionEn: 'Your account balance',
                PermissionDescriptionAr: 'رصيد حسابك',
              },
            ],
          },
          {
            DataGroupId: 'RegularPayments',
            DescriptionEn: 'Your Regular Payments',
            DescriptionAr: 'بيانات عمليات المدفوعات',
            Permissions: [
              {
                ResourceId: 'standing-orders',
                ResourceDescriptionEn: 'Standing Orders',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadStandingOrdersDetail',
                PermissionDescriptionEn: 'Details of your Standing Orders',
                PermissionDescriptionAr: 'الآوامر المستدامة',
              },
              {
                ResourceId: 'direct-debits',
                ResourceDescriptionEn: 'Direct Debits',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadDirectDebits',
                PermissionDescriptionEn: 'Your Direct Debits\t',
                PermissionDescriptionAr: 'تفاصيل عن الحسم المباشر',
              },
              {
                ResourceId: 'scheduled-payments',
                ResourceDescriptionEn: 'Scheduled Payments',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadScheduledPaymentsBasic',
                PermissionDescriptionEn:
                  'Recurring and future dated payments from your card account',
                PermissionDescriptionAr: 'مدفوعات بطاقتك المتكررة والمجدولة',
              },
              {
                ResourceId: 'scheduled-payments',
                ResourceDescriptionEn: 'Scheduled Payments',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadScheduledPaymentsDetail',
                PermissionDescriptionEn:
                  'Details of recurring and future dated payments from your card account\t',
                PermissionDescriptionAr: '',
              },
              {
                ResourceId: 'beneficiaries',
                ResourceDescriptionEn: 'Beneficiaries',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadBeneficiariesBasic',
                PermissionDescriptionEn: 'Payee agreements you have set up',
                PermissionDescriptionAr: 'اسماء المعرفيين والمستفيدين بحسابك',
              },
              {
                ResourceId: 'beneficiaries',
                ResourceDescriptionEn: 'Beneficiaries',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadBeneficiariesDetail',
                PermissionDescriptionEn:
                  'Details of Payee agreements you have set up',
                PermissionDescriptionAr: 'تفاصيل المعرفيين والمستفيدين بحسابك',
              },
              {
                ResourceId: 'standing-orders',
                ResourceDescriptionEn: 'Standing Orders',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadStandingOrdersBasic',
                PermissionDescriptionEn: 'Your Standing Orders',
                PermissionDescriptionAr: 'الطلبات القائمة',
              },
            ],
          },
          {
            DataGroupId: 'PartyDetails',
            DescriptionEn: 'Contact and party details',
            DescriptionAr: 'المعلومات الشخصية',
            Permissions: [
              {
                ResourceId: 'parties',
                ResourceDescriptionEn: 'Parties',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadPartyPSU',
                PermissionDescriptionEn:
                  'The name of the account and your full legal name.\r\nOptionally this can also include your address, telephone numbers and email',
                PermissionDescriptionAr:
                  'اسم الحساب والاسم الكامل لصاحب الحساب، بالإضافة إلى العنوان البريدي',
              },
              {
                ResourceId: 'parties',
                ResourceDescriptionEn: 'Parties',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadPartyPSUIdentity',
                PermissionDescriptionEn:
                  'The name of the account, address, date of birth, national ID and residency number\tThe account name, address, date of birth, national ID and residency number',
                PermissionDescriptionAr:
                  'الاسم والعنوان البريدي وتاريخ الميلاد ومعلومات الهوية او الإقامة',
              },
              {
                ResourceId: 'parties',
                ResourceDescriptionEn: 'Parties',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadParty',
                PermissionDescriptionEn:
                  'The name of the account and the full legal name(s) of all parties.\r\nOptionally this can also include their address or addresses, telephone ',
                PermissionDescriptionAr:
                  'اسم ومعلومات صاحب الحساب والعنوان البريدي ',
              },
            ],
          },
          {
            DataGroupId: 'AccountTransactions',
            DescriptionEn: 'Your Account Transactions',
            DescriptionAr: 'تفاصيل عمليات الحساب',
            Permissions: [
              {
                ResourceId: 'transactions',
                ResourceDescriptionEn: 'Transactions',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadTransactionsCredits',
                PermissionDescriptionEn:
                  'Details of your incoming transactions',
                PermissionDescriptionAr: 'تفاصيل عن العمليات الواردة',
              },
              {
                ResourceId: 'transactions',
                ResourceDescriptionEn: 'Transactions',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadTransactionsDebits',
                PermissionDescriptionEn:
                  'Details of your outgoing transactions',
                PermissionDescriptionAr: 'تفاصيل عن العمليات المنفذة',
              },
              {
                ResourceId: 'transactions',
                ResourceDescriptionEn: 'Transactions',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadTransactionsBasic',
                PermissionDescriptionEn: 'Your transactions',
                PermissionDescriptionAr: 'عمليات الحساب',
              },
              {
                ResourceId: 'transactions',
                ResourceDescriptionEn: 'Transactions',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadTransactionsDetail',
                PermissionDescriptionEn: 'Details of your transactions',
                PermissionDescriptionAr: 'تفاصيل عمليات الحساب',
              },
            ],
          },
        ],
        TransactionFromDateTime: '2023-12-31T22:00:00.000Z',
        TransactionToDateTime: '2025-08-26T21:14:30.894Z',
        LastDataSharedDateTime: '2024-09-01T14:53:19.793Z',
        AccountTypesList: ['KSAOB.Retail'],
        AccountSubTypesList: ['CurrentAccount'],
        OnBehalfOf: {
          TradingName: 'Acme Accounting Trading Name',
          LegalName: 'Acme Accounting Legal Name',
          IdentifierType: 'Other',
          Identifier: 'abcd1234',
        },
        PurposeList: ['Account Aggregation'],
        RevokedBy: 'KSAOB.TPP',
        SecurityProfile: 'Redirection',
      },
      {
        AccountsLinkId: '178108986812858308311014147513',
        PSUId: '255cc',
        UserLoginId: 'RJHISARI_',
        FinancialInstitution: {
          FinancialInstitutionId: 'BSFRSARI',
          NameEn: 'Banque Saudi Fransi',
          NameAr: 'البنك السعودي الفرنسي',
        },
        CreationDateTime: '2024-08-27T21:21:38.122Z',
        Status: 'Revoked',
        StatusUpdateDateTime: '2024-09-01T15:05:37.981Z',
        Accounts: [
          '432f171f-ec17-48f4-832c-ff37c19d2da3',
          'e04e4f47-c389-47a2-ba66-2817eb5f617e',
          '1051bd75-4ab0-43b7-b9ba-a1c6fdc782c5',
        ],
        DataGroups: [
          {
            DataGroupId: 'AccountDetails',
            DescriptionEn: 'Your Account Details',
            DescriptionAr: 'تفاصيل وبيانات الحساب',
            Permissions: [
              {
                ResourceId: 'accounts',
                ResourceDescriptionEn: 'Accounts',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadAccountsBasic',
                PermissionDescriptionEn:
                  'Any other name by which you refer to this account',
                PermissionDescriptionAr: 'لاسم المختصر لحسابك',
              },
              {
                ResourceId: 'accounts',
                ResourceDescriptionEn: 'Accounts',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadAccountsDetail',
                PermissionDescriptionEn: 'Your account name and number',
                PermissionDescriptionAr: 'معلومات وتفاصيل حساب',
              },
              {
                ResourceId: 'balances',
                ResourceDescriptionEn: 'Balances',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadBalances',
                PermissionDescriptionEn: 'Your account balance',
                PermissionDescriptionAr: 'رصيد حسابك',
              },
            ],
          },
          {
            DataGroupId: 'RegularPayments',
            DescriptionEn: 'Your Regular Payments',
            DescriptionAr: 'بيانات عمليات المدفوعات',
            Permissions: [
              {
                ResourceId: 'standing-orders',
                ResourceDescriptionEn: 'Standing Orders',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadStandingOrdersDetail',
                PermissionDescriptionEn: 'Details of your Standing Orders',
                PermissionDescriptionAr: 'الآوامر المستدامة',
              },
              {
                ResourceId: 'direct-debits',
                ResourceDescriptionEn: 'Direct Debits',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadDirectDebits',
                PermissionDescriptionEn: 'Your Direct Debits\t',
                PermissionDescriptionAr: 'تفاصيل عن الحسم المباشر',
              },
              {
                ResourceId: 'scheduled-payments',
                ResourceDescriptionEn: 'Scheduled Payments',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadScheduledPaymentsBasic',
                PermissionDescriptionEn:
                  'Recurring and future dated payments from your card account',
                PermissionDescriptionAr: 'مدفوعات بطاقتك المتكررة والمجدولة',
              },
              {
                ResourceId: 'scheduled-payments',
                ResourceDescriptionEn: 'Scheduled Payments',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadScheduledPaymentsDetail',
                PermissionDescriptionEn:
                  'Details of recurring and future dated payments from your card account\t',
                PermissionDescriptionAr: '',
              },
              {
                ResourceId: 'beneficiaries',
                ResourceDescriptionEn: 'Beneficiaries',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadBeneficiariesBasic',
                PermissionDescriptionEn: 'Payee agreements you have set up',
                PermissionDescriptionAr: 'اسماء المعرفيين والمستفيدين بحسابك',
              },
              {
                ResourceId: 'beneficiaries',
                ResourceDescriptionEn: 'Beneficiaries',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadBeneficiariesDetail',
                PermissionDescriptionEn:
                  'Details of Payee agreements you have set up',
                PermissionDescriptionAr: 'تفاصيل المعرفيين والمستفيدين بحسابك',
              },
              {
                ResourceId: 'standing-orders',
                ResourceDescriptionEn: 'Standing Orders',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadStandingOrdersBasic',
                PermissionDescriptionEn: 'Your Standing Orders',
                PermissionDescriptionAr: 'الطلبات القائمة',
              },
            ],
          },
          {
            DataGroupId: 'PartyDetails',
            DescriptionEn: 'Contact and party details',
            DescriptionAr: 'المعلومات الشخصية',
            Permissions: [
              {
                ResourceId: 'parties',
                ResourceDescriptionEn: 'Parties',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadPartyPSU',
                PermissionDescriptionEn:
                  'The name of the account and your full legal name.\r\nOptionally this can also include your address, telephone numbers and email',
                PermissionDescriptionAr:
                  'اسم الحساب والاسم الكامل لصاحب الحساب، بالإضافة إلى العنوان البريدي',
              },
              {
                ResourceId: 'parties',
                ResourceDescriptionEn: 'Parties',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadPartyPSUIdentity',
                PermissionDescriptionEn:
                  'The name of the account, address, date of birth, national ID and residency number\tThe account name, address, date of birth, national ID and residency number',
                PermissionDescriptionAr:
                  'الاسم والعنوان البريدي وتاريخ الميلاد ومعلومات الهوية او الإقامة',
              },
              {
                ResourceId: 'parties',
                ResourceDescriptionEn: 'Parties',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadParty',
                PermissionDescriptionEn:
                  'The name of the account and the full legal name(s) of all parties.\r\nOptionally this can also include their address or addresses, telephone ',
                PermissionDescriptionAr:
                  'اسم ومعلومات صاحب الحساب والعنوان البريدي ',
              },
            ],
          },
          {
            DataGroupId: 'AccountTransactions',
            DescriptionEn: 'Your Account Transactions',
            DescriptionAr: 'تفاصيل عمليات الحساب',
            Permissions: [
              {
                ResourceId: 'transactions',
                ResourceDescriptionEn: 'Transactions',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadTransactionsCredits',
                PermissionDescriptionEn:
                  'Details of your incoming transactions',
                PermissionDescriptionAr: 'تفاصيل عن العمليات الواردة',
              },
              {
                ResourceId: 'transactions',
                ResourceDescriptionEn: 'Transactions',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadTransactionsDebits',
                PermissionDescriptionEn:
                  'Details of your outgoing transactions',
                PermissionDescriptionAr: 'تفاصيل عن العمليات المنفذة',
              },
              {
                ResourceId: 'transactions',
                ResourceDescriptionEn: 'Transactions',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadTransactionsBasic',
                PermissionDescriptionEn: 'Your transactions',
                PermissionDescriptionAr: 'عمليات الحساب',
              },
              {
                ResourceId: 'transactions',
                ResourceDescriptionEn: 'Transactions',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadTransactionsDetail',
                PermissionDescriptionEn: 'Details of your transactions',
                PermissionDescriptionAr: 'تفاصيل عمليات الحساب',
              },
            ],
          },
        ],
        TransactionFromDateTime: '2023-12-31T22:00:00.000Z',
        TransactionToDateTime: '2025-08-26T21:21:36.511Z',
        LastDataSharedDateTime: '2024-09-01T15:05:16.876Z',
        AccountTypesList: ['KSAOB.Retail'],
        AccountSubTypesList: ['CurrentAccount'],
        OnBehalfOf: {
          TradingName: 'Acme Accounting Trading Name',
          LegalName: 'Acme Accounting Legal Name',
          IdentifierType: 'Other',
          Identifier: 'abcd1234',
        },
        PurposeList: ['Account Aggregation'],
        RevokedBy: 'KSAOB.TPP',
        SecurityProfile: 'Redirection',
      },
      {
        AccountsLinkId: '414339626400481665268263530346',
        PSUId: '255cc',
        UserLoginId: 'RJHISARI_',
        FinancialInstitution: {
          FinancialInstitutionId: 'BSFRSARI',
          NameEn: 'Banque Saudi Fransi',
          NameAr: 'البنك السعودي الفرنسي',
          Nickname: 'Test',
        },
        CreationDateTime: '2024-08-28T18:39:11.616Z',
        Status: 'Active',
        StatusUpdateDateTime: '2024-08-28T18:39:11.616Z',
        Accounts: [
          '432f171f-ec17-48f4-832c-ff37c19d2da3',
          'e04e4f47-c389-47a2-ba66-2817eb5f617e',
          '1051bd75-4ab0-43b7-b9ba-a1c6fdc782c5',
        ],
        DataGroups: [
          {
            DataGroupId: 'AccountDetails',
            DescriptionEn: 'Your Account Details',
            DescriptionAr: 'تفاصيل وبيانات الحساب',
            Permissions: [
              {
                ResourceId: 'accounts',
                ResourceDescriptionEn: 'Accounts',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadAccountsBasic',
                PermissionDescriptionEn:
                  'Any other name by which you refer to this account',
                PermissionDescriptionAr: 'لاسم المختصر لحسابك',
              },
              {
                ResourceId: 'accounts',
                ResourceDescriptionEn: 'Accounts',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadAccountsDetail',
                PermissionDescriptionEn: 'Your account name and number',
                PermissionDescriptionAr: 'معلومات وتفاصيل حساب',
              },
              {
                ResourceId: 'balances',
                ResourceDescriptionEn: 'Balances',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadBalances',
                PermissionDescriptionEn: 'Your account balance',
                PermissionDescriptionAr: 'رصيد حسابك',
              },
            ],
          },
          {
            DataGroupId: 'RegularPayments',
            DescriptionEn: 'Your Regular Payments',
            DescriptionAr: 'بيانات عمليات المدفوعات',
            Permissions: [
              {
                ResourceId: 'standing-orders',
                ResourceDescriptionEn: 'Standing Orders',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadStandingOrdersDetail',
                PermissionDescriptionEn: 'Details of your Standing Orders',
                PermissionDescriptionAr: 'الآوامر المستدامة',
              },
              {
                ResourceId: 'direct-debits',
                ResourceDescriptionEn: 'Direct Debits',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadDirectDebits',
                PermissionDescriptionEn: 'Your Direct Debits\t',
                PermissionDescriptionAr: 'تفاصيل عن الحسم المباشر',
              },
              {
                ResourceId: 'scheduled-payments',
                ResourceDescriptionEn: 'Scheduled Payments',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadScheduledPaymentsBasic',
                PermissionDescriptionEn:
                  'Recurring and future dated payments from your card account',
                PermissionDescriptionAr: 'مدفوعات بطاقتك المتكررة والمجدولة',
              },
              {
                ResourceId: 'scheduled-payments',
                ResourceDescriptionEn: 'Scheduled Payments',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadScheduledPaymentsDetail',
                PermissionDescriptionEn:
                  'Details of recurring and future dated payments from your card account\t',
                PermissionDescriptionAr: '',
              },
              {
                ResourceId: 'beneficiaries',
                ResourceDescriptionEn: 'Beneficiaries',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadBeneficiariesBasic',
                PermissionDescriptionEn: 'Payee agreements you have set up',
                PermissionDescriptionAr: 'اسماء المعرفيين والمستفيدين بحسابك',
              },
              {
                ResourceId: 'beneficiaries',
                ResourceDescriptionEn: 'Beneficiaries',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadBeneficiariesDetail',
                PermissionDescriptionEn:
                  'Details of Payee agreements you have set up',
                PermissionDescriptionAr: 'تفاصيل المعرفيين والمستفيدين بحسابك',
              },
              {
                ResourceId: 'standing-orders',
                ResourceDescriptionEn: 'Standing Orders',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadStandingOrdersBasic',
                PermissionDescriptionEn: 'Your Standing Orders',
                PermissionDescriptionAr: 'الطلبات القائمة',
              },
            ],
          },
          {
            DataGroupId: 'PartyDetails',
            DescriptionEn: 'Contact and party details',
            DescriptionAr: 'المعلومات الشخصية',
            Permissions: [
              {
                ResourceId: 'parties',
                ResourceDescriptionEn: 'Parties',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadPartyPSU',
                PermissionDescriptionEn:
                  'The name of the account and your full legal name.\r\nOptionally this can also include your address, telephone numbers and email',
                PermissionDescriptionAr:
                  'اسم الحساب والاسم الكامل لصاحب الحساب، بالإضافة إلى العنوان البريدي',
              },
              {
                ResourceId: 'parties',
                ResourceDescriptionEn: 'Parties',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadPartyPSUIdentity',
                PermissionDescriptionEn:
                  'The name of the account, address, date of birth, national ID and residency number\tThe account name, address, date of birth, national ID and residency number',
                PermissionDescriptionAr:
                  'الاسم والعنوان البريدي وتاريخ الميلاد ومعلومات الهوية او الإقامة',
              },
              {
                ResourceId: 'parties',
                ResourceDescriptionEn: 'Parties',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadParty',
                PermissionDescriptionEn:
                  'The name of the account and the full legal name(s) of all parties.\r\nOptionally this can also include their address or addresses, telephone ',
                PermissionDescriptionAr:
                  'اسم ومعلومات صاحب الحساب والعنوان البريدي ',
              },
            ],
          },
          {
            DataGroupId: 'AccountTransactions',
            DescriptionEn: 'Your Account Transactions',
            DescriptionAr: 'تفاصيل عمليات الحساب',
            Permissions: [
              {
                ResourceId: 'transactions',
                ResourceDescriptionEn: 'Transactions',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadTransactionsCredits',
                PermissionDescriptionEn:
                  'Details of your incoming transactions',
                PermissionDescriptionAr: 'تفاصيل عن العمليات الواردة',
              },
              {
                ResourceId: 'transactions',
                ResourceDescriptionEn: 'Transactions',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadTransactionsDebits',
                PermissionDescriptionEn:
                  'Details of your outgoing transactions',
                PermissionDescriptionAr: 'تفاصيل عن العمليات المنفذة',
              },
              {
                ResourceId: 'transactions',
                ResourceDescriptionEn: 'Transactions',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadTransactionsBasic',
                PermissionDescriptionEn: 'Your transactions',
                PermissionDescriptionAr: 'عمليات الحساب',
              },
              {
                ResourceId: 'transactions',
                ResourceDescriptionEn: 'Transactions',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadTransactionsDetail',
                PermissionDescriptionEn: 'Details of your transactions',
                PermissionDescriptionAr: 'تفاصيل عمليات الحساب',
              },
            ],
          },
        ],
        TransactionFromDateTime: '2023-12-31T22:00:00.000Z',
        TransactionToDateTime: '2025-08-27T18:39:09.501Z',
        LastDataSharedDateTime: '2024-10-01T21:55:10.585Z',
        AccountTypesList: ['KSAOB.Retail'],
        AccountSubTypesList: ['CurrentAccount'],
        OnBehalfOf: {
          TradingName: 'Acme Accounting Trading Name',
          LegalName: 'Acme Accounting Legal Name',
          IdentifierType: 'Other',
          Identifier: 'abcd1234',
        },
        PurposeList: ['Account Aggregation'],
        SecurityProfile: 'Redirection',
      },
      {
        AccountsLinkId: '215662762929608920190370898734',
        PSUId: '255cc',
        UserLoginId: 'RJHISARI_',
        FinancialInstitution: {
          FinancialInstitutionId: 'BSFRSARI',
          NameEn: 'Banque Saudi Fransi',
          NameAr: 'البنك السعودي الفرنسي',
        },
        CreationDateTime: '2024-08-28T19:13:03.038Z',
        Status: 'Pending',
        StatusUpdateDateTime: '2024-08-28T19:13:03.038Z',
        DataGroups: [
          {
            DataGroupId: 'AccountDetails',
            DescriptionEn: 'Your Account Details',
            DescriptionAr: 'تفاصيل وبيانات الحساب',
            Permissions: [
              {
                ResourceId: 'accounts',
                ResourceDescriptionEn: 'Accounts',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadAccountsBasic',
                PermissionDescriptionEn:
                  'Any other name by which you refer to this account',
                PermissionDescriptionAr: 'لاسم المختصر لحسابك',
              },
              {
                ResourceId: 'accounts',
                ResourceDescriptionEn: 'Accounts',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadAccountsDetail',
                PermissionDescriptionEn: 'Your account name and number',
                PermissionDescriptionAr: 'معلومات وتفاصيل حساب',
              },
              {
                ResourceId: 'balances',
                ResourceDescriptionEn: 'Balances',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadBalances',
                PermissionDescriptionEn: 'Your account balance',
                PermissionDescriptionAr: 'رصيد حسابك',
              },
            ],
          },
          {
            DataGroupId: 'RegularPayments',
            DescriptionEn: 'Your Regular Payments',
            DescriptionAr: 'بيانات عمليات المدفوعات',
            Permissions: [
              {
                ResourceId: 'standing-orders',
                ResourceDescriptionEn: 'Standing Orders',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadStandingOrdersDetail',
                PermissionDescriptionEn: 'Details of your Standing Orders',
                PermissionDescriptionAr: 'الآوامر المستدامة',
              },
              {
                ResourceId: 'direct-debits',
                ResourceDescriptionEn: 'Direct Debits',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadDirectDebits',
                PermissionDescriptionEn: 'Your Direct Debits\t',
                PermissionDescriptionAr: 'تفاصيل عن الحسم المباشر',
              },
              {
                ResourceId: 'scheduled-payments',
                ResourceDescriptionEn: 'Scheduled Payments',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadScheduledPaymentsBasic',
                PermissionDescriptionEn:
                  'Recurring and future dated payments from your card account',
                PermissionDescriptionAr: 'مدفوعات بطاقتك المتكررة والمجدولة',
              },
              {
                ResourceId: 'scheduled-payments',
                ResourceDescriptionEn: 'Scheduled Payments',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadScheduledPaymentsDetail',
                PermissionDescriptionEn:
                  'Details of recurring and future dated payments from your card account\t',
                PermissionDescriptionAr: '',
              },
              {
                ResourceId: 'beneficiaries',
                ResourceDescriptionEn: 'Beneficiaries',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadBeneficiariesBasic',
                PermissionDescriptionEn: 'Payee agreements you have set up',
                PermissionDescriptionAr: 'اسماء المعرفيين والمستفيدين بحسابك',
              },
              {
                ResourceId: 'beneficiaries',
                ResourceDescriptionEn: 'Beneficiaries',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadBeneficiariesDetail',
                PermissionDescriptionEn:
                  'Details of Payee agreements you have set up',
                PermissionDescriptionAr: 'تفاصيل المعرفيين والمستفيدين بحسابك',
              },
              {
                ResourceId: 'standing-orders',
                ResourceDescriptionEn: 'Standing Orders',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadStandingOrdersBasic',
                PermissionDescriptionEn: 'Your Standing Orders',
                PermissionDescriptionAr: 'الطلبات القائمة',
              },
            ],
          },
          {
            DataGroupId: 'PartyDetails',
            DescriptionEn: 'Contact and party details',
            DescriptionAr: 'المعلومات الشخصية',
            Permissions: [
              {
                ResourceId: 'parties',
                ResourceDescriptionEn: 'Parties',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadPartyPSU',
                PermissionDescriptionEn:
                  'The name of the account and your full legal name.\r\nOptionally this can also include your address, telephone numbers and email',
                PermissionDescriptionAr:
                  'اسم الحساب والاسم الكامل لصاحب الحساب، بالإضافة إلى العنوان البريدي',
              },
              {
                ResourceId: 'parties',
                ResourceDescriptionEn: 'Parties',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadPartyPSUIdentity',
                PermissionDescriptionEn:
                  'The name of the account, address, date of birth, national ID and residency number\tThe account name, address, date of birth, national ID and residency number',
                PermissionDescriptionAr:
                  'الاسم والعنوان البريدي وتاريخ الميلاد ومعلومات الهوية او الإقامة',
              },
              {
                ResourceId: 'parties',
                ResourceDescriptionEn: 'Parties',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadParty',
                PermissionDescriptionEn:
                  'The name of the account and the full legal name(s) of all parties.\r\nOptionally this can also include their address or addresses, telephone ',
                PermissionDescriptionAr:
                  'اسم ومعلومات صاحب الحساب والعنوان البريدي ',
              },
            ],
          },
          {
            DataGroupId: 'AccountTransactions',
            DescriptionEn: 'Your Account Transactions',
            DescriptionAr: 'تفاصيل عمليات الحساب',
            Permissions: [
              {
                ResourceId: 'transactions',
                ResourceDescriptionEn: 'Transactions',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadTransactionsCredits',
                PermissionDescriptionEn:
                  'Details of your incoming transactions',
                PermissionDescriptionAr: 'تفاصيل عن العمليات الواردة',
              },
              {
                ResourceId: 'transactions',
                ResourceDescriptionEn: 'Transactions',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadTransactionsDebits',
                PermissionDescriptionEn:
                  'Details of your outgoing transactions',
                PermissionDescriptionAr: 'تفاصيل عن العمليات المنفذة',
              },
              {
                ResourceId: 'transactions',
                ResourceDescriptionEn: 'Transactions',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadTransactionsBasic',
                PermissionDescriptionEn: 'Your transactions',
                PermissionDescriptionAr: 'عمليات الحساب',
              },
              {
                ResourceId: 'transactions',
                ResourceDescriptionEn: 'Transactions',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadTransactionsDetail',
                PermissionDescriptionEn: 'Details of your transactions',
                PermissionDescriptionAr: 'تفاصيل عمليات الحساب',
              },
            ],
          },
        ],
        TransactionFromDateTime: '2023-12-31T22:00:00.000Z',
        TransactionToDateTime: '2025-08-27T19:12:59.857Z',
        AccountTypesList: ['KSAOB.Retail'],
        AccountSubTypesList: ['CurrentAccount'],
        OnBehalfOf: {
          TradingName: 'Acme Accounting Trading Name',
          LegalName: 'Acme Accounting Legal Name',
          IdentifierType: 'Other',
          Identifier: 'abcd1234',
        },
        PurposeList: ['Account Aggregation'],
        SecurityProfile: 'Redirection',
      },
      {
        AccountsLinkId: '185208267698360857156454328159',
        PSUId: '255cc',
        UserLoginId: 'RJHISARI_',
        FinancialInstitution: {
          FinancialInstitutionId: 'BSFRSARI',
          NameEn: 'Banque Saudi Fransi',
          NameAr: 'البنك السعودي الفرنسي',
        },
        CreationDateTime: '2024-08-28T19:14:35.121Z',
        Status: 'Active',
        StatusUpdateDateTime: '2024-08-28T19:14:35.121Z',
        Accounts: [
          '432f171f-ec17-48f4-832c-ff37c19d2da3',
          'e04e4f47-c389-47a2-ba66-2817eb5f617e',
          '9c117c11-3796-4e77-988c-1c848cdf4fe3',
          '3ecab43a-96fd-4c84-88ca-cd0973a9ac42',
        ],
        DataGroups: [
          {
            DataGroupId: 'AccountDetails',
            DescriptionEn: 'Your Account Details',
            DescriptionAr: 'تفاصيل وبيانات الحساب',
            Permissions: [
              {
                ResourceId: 'accounts',
                ResourceDescriptionEn: 'Accounts',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadAccountsBasic',
                PermissionDescriptionEn:
                  'Any other name by which you refer to this account',
                PermissionDescriptionAr: 'لاسم المختصر لحسابك',
              },
              {
                ResourceId: 'accounts',
                ResourceDescriptionEn: 'Accounts',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadAccountsDetail',
                PermissionDescriptionEn: 'Your account name and number',
                PermissionDescriptionAr: 'معلومات وتفاصيل حساب',
              },
              {
                ResourceId: 'balances',
                ResourceDescriptionEn: 'Balances',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadBalances',
                PermissionDescriptionEn: 'Your account balance',
                PermissionDescriptionAr: 'رصيد حسابك',
              },
            ],
          },
          {
            DataGroupId: 'RegularPayments',
            DescriptionEn: 'Your Regular Payments',
            DescriptionAr: 'بيانات عمليات المدفوعات',
            Permissions: [
              {
                ResourceId: 'standing-orders',
                ResourceDescriptionEn: 'Standing Orders',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadStandingOrdersDetail',
                PermissionDescriptionEn: 'Details of your Standing Orders',
                PermissionDescriptionAr: 'الآوامر المستدامة',
              },
              {
                ResourceId: 'direct-debits',
                ResourceDescriptionEn: 'Direct Debits',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadDirectDebits',
                PermissionDescriptionEn: 'Your Direct Debits\t',
                PermissionDescriptionAr: 'تفاصيل عن الحسم المباشر',
              },
              {
                ResourceId: 'scheduled-payments',
                ResourceDescriptionEn: 'Scheduled Payments',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadScheduledPaymentsBasic',
                PermissionDescriptionEn:
                  'Recurring and future dated payments from your card account',
                PermissionDescriptionAr: 'مدفوعات بطاقتك المتكررة والمجدولة',
              },
              {
                ResourceId: 'scheduled-payments',
                ResourceDescriptionEn: 'Scheduled Payments',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadScheduledPaymentsDetail',
                PermissionDescriptionEn:
                  'Details of recurring and future dated payments from your card account\t',
                PermissionDescriptionAr: '',
              },
              {
                ResourceId: 'beneficiaries',
                ResourceDescriptionEn: 'Beneficiaries',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadBeneficiariesBasic',
                PermissionDescriptionEn: 'Payee agreements you have set up',
                PermissionDescriptionAr: 'اسماء المعرفيين والمستفيدين بحسابك',
              },
              {
                ResourceId: 'beneficiaries',
                ResourceDescriptionEn: 'Beneficiaries',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadBeneficiariesDetail',
                PermissionDescriptionEn:
                  'Details of Payee agreements you have set up',
                PermissionDescriptionAr: 'تفاصيل المعرفيين والمستفيدين بحسابك',
              },
              {
                ResourceId: 'standing-orders',
                ResourceDescriptionEn: 'Standing Orders',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadStandingOrdersBasic',
                PermissionDescriptionEn: 'Your Standing Orders',
                PermissionDescriptionAr: 'الطلبات القائمة',
              },
            ],
          },
          {
            DataGroupId: 'PartyDetails',
            DescriptionEn: 'Contact and party details',
            DescriptionAr: 'المعلومات الشخصية',
            Permissions: [
              {
                ResourceId: 'parties',
                ResourceDescriptionEn: 'Parties',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadPartyPSU',
                PermissionDescriptionEn:
                  'The name of the account and your full legal name.\r\nOptionally this can also include your address, telephone numbers and email',
                PermissionDescriptionAr:
                  'اسم الحساب والاسم الكامل لصاحب الحساب، بالإضافة إلى العنوان البريدي',
              },
              {
                ResourceId: 'parties',
                ResourceDescriptionEn: 'Parties',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadPartyPSUIdentity',
                PermissionDescriptionEn:
                  'The name of the account, address, date of birth, national ID and residency number\tThe account name, address, date of birth, national ID and residency number',
                PermissionDescriptionAr:
                  'الاسم والعنوان البريدي وتاريخ الميلاد ومعلومات الهوية او الإقامة',
              },
              {
                ResourceId: 'parties',
                ResourceDescriptionEn: 'Parties',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadParty',
                PermissionDescriptionEn:
                  'The name of the account and the full legal name(s) of all parties.\r\nOptionally this can also include their address or addresses, telephone ',
                PermissionDescriptionAr:
                  'اسم ومعلومات صاحب الحساب والعنوان البريدي ',
              },
            ],
          },
          {
            DataGroupId: 'AccountTransactions',
            DescriptionEn: 'Your Account Transactions',
            DescriptionAr: 'تفاصيل عمليات الحساب',
            Permissions: [
              {
                ResourceId: 'transactions',
                ResourceDescriptionEn: 'Transactions',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadTransactionsCredits',
                PermissionDescriptionEn:
                  'Details of your incoming transactions',
                PermissionDescriptionAr: 'تفاصيل عن العمليات الواردة',
              },
              {
                ResourceId: 'transactions',
                ResourceDescriptionEn: 'Transactions',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadTransactionsDebits',
                PermissionDescriptionEn:
                  'Details of your outgoing transactions',
                PermissionDescriptionAr: 'تفاصيل عن العمليات المنفذة',
              },
              {
                ResourceId: 'transactions',
                ResourceDescriptionEn: 'Transactions',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadTransactionsBasic',
                PermissionDescriptionEn: 'Your transactions',
                PermissionDescriptionAr: 'عمليات الحساب',
              },
              {
                ResourceId: 'transactions',
                ResourceDescriptionEn: 'Transactions',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadTransactionsDetail',
                PermissionDescriptionEn: 'Details of your transactions',
                PermissionDescriptionAr: 'تفاصيل عمليات الحساب',
              },
            ],
          },
        ],
        TransactionFromDateTime: '2023-12-31T22:00:00.000Z',
        TransactionToDateTime: '2025-08-27T19:14:33.916Z',
        LastDataSharedDateTime: '2024-10-01T21:48:13.957Z',
        AccountTypesList: ['KSAOB.Retail'],
        AccountSubTypesList: ['CurrentAccount'],
        OnBehalfOf: {
          TradingName: 'Acme Accounting Trading Name',
          LegalName: 'Acme Accounting Legal Name',
          IdentifierType: 'Other',
          Identifier: 'abcd1234',
        },
        PurposeList: ['Account Aggregation'],
        SecurityProfile: 'Redirection',
      },
      {
        AccountsLinkId: '327762342203657259516670652938',
        PSUId: '255cc',
        UserLoginId: 'RJHISARI_',
        FinancialInstitution: {
          FinancialInstitutionId: 'BSFRSARI',
          NameEn: 'Banque Saudi Fransi',
          NameAr: 'البنك السعودي الفرنسي',
        },
        CreationDateTime: '2024-08-29T07:12:27.705Z',
        Status: 'Active',
        StatusUpdateDateTime: '2024-08-29T07:12:27.705Z',
        Accounts: [
          '432f171f-ec17-48f4-832c-ff37c19d2da3',
          'e04e4f47-c389-47a2-ba66-2817eb5f617e',
          '1051bd75-4ab0-43b7-b9ba-a1c6fdc782c5',
          '9c117c11-3796-4e77-988c-1c848cdf4fe3',
        ],
        DataGroups: [
          {
            DataGroupId: 'AccountDetails',
            DescriptionEn: 'Your Account Details',
            DescriptionAr: 'تفاصيل وبيانات الحساب',
            Permissions: [
              {
                ResourceId: 'accounts',
                ResourceDescriptionEn: 'Accounts',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadAccountsBasic',
                PermissionDescriptionEn:
                  'Any other name by which you refer to this account',
                PermissionDescriptionAr: 'لاسم المختصر لحسابك',
              },
              {
                ResourceId: 'accounts',
                ResourceDescriptionEn: 'Accounts',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadAccountsDetail',
                PermissionDescriptionEn: 'Your account name and number',
                PermissionDescriptionAr: 'معلومات وتفاصيل حساب',
              },
              {
                ResourceId: 'balances',
                ResourceDescriptionEn: 'Balances',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadBalances',
                PermissionDescriptionEn: 'Your account balance',
                PermissionDescriptionAr: 'رصيد حسابك',
              },
            ],
          },
          {
            DataGroupId: 'RegularPayments',
            DescriptionEn: 'Your Regular Payments',
            DescriptionAr: 'بيانات عمليات المدفوعات',
            Permissions: [
              {
                ResourceId: 'standing-orders',
                ResourceDescriptionEn: 'Standing Orders',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadStandingOrdersDetail',
                PermissionDescriptionEn: 'Details of your Standing Orders',
                PermissionDescriptionAr: 'الآوامر المستدامة',
              },
              {
                ResourceId: 'direct-debits',
                ResourceDescriptionEn: 'Direct Debits',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadDirectDebits',
                PermissionDescriptionEn: 'Your Direct Debits\t',
                PermissionDescriptionAr: 'تفاصيل عن الحسم المباشر',
              },
              {
                ResourceId: 'scheduled-payments',
                ResourceDescriptionEn: 'Scheduled Payments',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadScheduledPaymentsBasic',
                PermissionDescriptionEn:
                  'Recurring and future dated payments from your card account',
                PermissionDescriptionAr: 'مدفوعات بطاقتك المتكررة والمجدولة',
              },
              {
                ResourceId: 'scheduled-payments',
                ResourceDescriptionEn: 'Scheduled Payments',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadScheduledPaymentsDetail',
                PermissionDescriptionEn:
                  'Details of recurring and future dated payments from your card account\t',
                PermissionDescriptionAr: '',
              },
              {
                ResourceId: 'beneficiaries',
                ResourceDescriptionEn: 'Beneficiaries',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadBeneficiariesBasic',
                PermissionDescriptionEn: 'Payee agreements you have set up',
                PermissionDescriptionAr: 'اسماء المعرفيين والمستفيدين بحسابك',
              },
              {
                ResourceId: 'beneficiaries',
                ResourceDescriptionEn: 'Beneficiaries',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadBeneficiariesDetail',
                PermissionDescriptionEn:
                  'Details of Payee agreements you have set up',
                PermissionDescriptionAr: 'تفاصيل المعرفيين والمستفيدين بحسابك',
              },
              {
                ResourceId: 'standing-orders',
                ResourceDescriptionEn: 'Standing Orders',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadStandingOrdersBasic',
                PermissionDescriptionEn: 'Your Standing Orders',
                PermissionDescriptionAr: 'الطلبات القائمة',
              },
            ],
          },
          {
            DataGroupId: 'PartyDetails',
            DescriptionEn: 'Contact and party details',
            DescriptionAr: 'المعلومات الشخصية',
            Permissions: [
              {
                ResourceId: 'parties',
                ResourceDescriptionEn: 'Parties',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadPartyPSU',
                PermissionDescriptionEn:
                  'The name of the account and your full legal name.\r\nOptionally this can also include your address, telephone numbers and email',
                PermissionDescriptionAr:
                  'اسم الحساب والاسم الكامل لصاحب الحساب، بالإضافة إلى العنوان البريدي',
              },
              {
                ResourceId: 'parties',
                ResourceDescriptionEn: 'Parties',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadPartyPSUIdentity',
                PermissionDescriptionEn:
                  'The name of the account, address, date of birth, national ID and residency number\tThe account name, address, date of birth, national ID and residency number',
                PermissionDescriptionAr:
                  'الاسم والعنوان البريدي وتاريخ الميلاد ومعلومات الهوية او الإقامة',
              },
              {
                ResourceId: 'parties',
                ResourceDescriptionEn: 'Parties',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadParty',
                PermissionDescriptionEn:
                  'The name of the account and the full legal name(s) of all parties.\r\nOptionally this can also include their address or addresses, telephone ',
                PermissionDescriptionAr:
                  'اسم ومعلومات صاحب الحساب والعنوان البريدي ',
              },
            ],
          },
          {
            DataGroupId: 'AccountTransactions',
            DescriptionEn: 'Your Account Transactions',
            DescriptionAr: 'تفاصيل عمليات الحساب',
            Permissions: [
              {
                ResourceId: 'transactions',
                ResourceDescriptionEn: 'Transactions',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadTransactionsCredits',
                PermissionDescriptionEn:
                  'Details of your incoming transactions',
                PermissionDescriptionAr: 'تفاصيل عن العمليات الواردة',
              },
              {
                ResourceId: 'transactions',
                ResourceDescriptionEn: 'Transactions',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadTransactionsDebits',
                PermissionDescriptionEn:
                  'Details of your outgoing transactions',
                PermissionDescriptionAr: 'تفاصيل عن العمليات المنفذة',
              },
              {
                ResourceId: 'transactions',
                ResourceDescriptionEn: 'Transactions',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadTransactionsBasic',
                PermissionDescriptionEn: 'Your transactions',
                PermissionDescriptionAr: 'عمليات الحساب',
              },
              {
                ResourceId: 'transactions',
                ResourceDescriptionEn: 'Transactions',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadTransactionsDetail',
                PermissionDescriptionEn: 'Details of your transactions',
                PermissionDescriptionAr: 'تفاصيل عمليات الحساب',
              },
            ],
          },
        ],
        TransactionFromDateTime: '2023-12-31T22:00:00.000Z',
        TransactionToDateTime: '2025-08-28T07:12:22.078Z',
        LastDataSharedDateTime: '2024-10-01T21:37:13.506Z',
        AccountTypesList: ['KSAOB.Retail'],
        AccountSubTypesList: ['CurrentAccount'],
        OnBehalfOf: {
          TradingName: 'Acme Accounting Trading Name',
          LegalName: 'Acme Accounting Legal Name',
          IdentifierType: 'Other',
          Identifier: 'abcd1234',
        },
        PurposeList: ['Account Aggregation'],
        SecurityProfile: 'Redirection',
      },
      {
        AccountsLinkId: '425698284744661982387244589604',
        PSUId: '255cc',
        UserLoginId: 'RJHISARI_',
        FinancialInstitution: {
          FinancialInstitutionId: 'BSFRSARI',
          NameEn: 'Banque Saudi Fransi',
          NameAr: 'البنك السعودي الفرنسي',
        },
        CreationDateTime: '2024-08-29T07:14:16.457Z',
        Status: 'Active',
        StatusUpdateDateTime: '2024-08-29T07:14:16.457Z',
        Accounts: [
          '432f171f-ec17-48f4-832c-ff37c19d2da3',
          'e04e4f47-c389-47a2-ba66-2817eb5f617e',
          '1051bd75-4ab0-43b7-b9ba-a1c6fdc782c5',
          '9c117c11-3796-4e77-988c-1c848cdf4fe3',
        ],
        DataGroups: [
          {
            DataGroupId: 'AccountDetails',
            DescriptionEn: 'Your Account Details',
            DescriptionAr: 'تفاصيل وبيانات الحساب',
            Permissions: [
              {
                ResourceId: 'accounts',
                ResourceDescriptionEn: 'Accounts',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadAccountsBasic',
                PermissionDescriptionEn:
                  'Any other name by which you refer to this account',
                PermissionDescriptionAr: 'لاسم المختصر لحسابك',
              },
              {
                ResourceId: 'accounts',
                ResourceDescriptionEn: 'Accounts',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadAccountsDetail',
                PermissionDescriptionEn: 'Your account name and number',
                PermissionDescriptionAr: 'معلومات وتفاصيل حساب',
              },
              {
                ResourceId: 'balances',
                ResourceDescriptionEn: 'Balances',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadBalances',
                PermissionDescriptionEn: 'Your account balance',
                PermissionDescriptionAr: 'رصيد حسابك',
              },
            ],
          },
          {
            DataGroupId: 'RegularPayments',
            DescriptionEn: 'Your Regular Payments',
            DescriptionAr: 'بيانات عمليات المدفوعات',
            Permissions: [
              {
                ResourceId: 'standing-orders',
                ResourceDescriptionEn: 'Standing Orders',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadStandingOrdersDetail',
                PermissionDescriptionEn: 'Details of your Standing Orders',
                PermissionDescriptionAr: 'الآوامر المستدامة',
              },
              {
                ResourceId: 'direct-debits',
                ResourceDescriptionEn: 'Direct Debits',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadDirectDebits',
                PermissionDescriptionEn: 'Your Direct Debits\t',
                PermissionDescriptionAr: 'تفاصيل عن الحسم المباشر',
              },
              {
                ResourceId: 'scheduled-payments',
                ResourceDescriptionEn: 'Scheduled Payments',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadScheduledPaymentsBasic',
                PermissionDescriptionEn:
                  'Recurring and future dated payments from your card account',
                PermissionDescriptionAr: 'مدفوعات بطاقتك المتكررة والمجدولة',
              },
              {
                ResourceId: 'scheduled-payments',
                ResourceDescriptionEn: 'Scheduled Payments',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadScheduledPaymentsDetail',
                PermissionDescriptionEn:
                  'Details of recurring and future dated payments from your card account\t',
                PermissionDescriptionAr: '',
              },
              {
                ResourceId: 'beneficiaries',
                ResourceDescriptionEn: 'Beneficiaries',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadBeneficiariesBasic',
                PermissionDescriptionEn: 'Payee agreements you have set up',
                PermissionDescriptionAr: 'اسماء المعرفيين والمستفيدين بحسابك',
              },
              {
                ResourceId: 'beneficiaries',
                ResourceDescriptionEn: 'Beneficiaries',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadBeneficiariesDetail',
                PermissionDescriptionEn:
                  'Details of Payee agreements you have set up',
                PermissionDescriptionAr: 'تفاصيل المعرفيين والمستفيدين بحسابك',
              },
              {
                ResourceId: 'standing-orders',
                ResourceDescriptionEn: 'Standing Orders',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadStandingOrdersBasic',
                PermissionDescriptionEn: 'Your Standing Orders',
                PermissionDescriptionAr: 'الطلبات القائمة',
              },
            ],
          },
          {
            DataGroupId: 'PartyDetails',
            DescriptionEn: 'Contact and party details',
            DescriptionAr: 'المعلومات الشخصية',
            Permissions: [
              {
                ResourceId: 'parties',
                ResourceDescriptionEn: 'Parties',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadPartyPSU',
                PermissionDescriptionEn:
                  'The name of the account and your full legal name.\r\nOptionally this can also include your address, telephone numbers and email',
                PermissionDescriptionAr:
                  'اسم الحساب والاسم الكامل لصاحب الحساب، بالإضافة إلى العنوان البريدي',
              },
              {
                ResourceId: 'parties',
                ResourceDescriptionEn: 'Parties',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadPartyPSUIdentity',
                PermissionDescriptionEn:
                  'The name of the account, address, date of birth, national ID and residency number\tThe account name, address, date of birth, national ID and residency number',
                PermissionDescriptionAr:
                  'الاسم والعنوان البريدي وتاريخ الميلاد ومعلومات الهوية او الإقامة',
              },
              {
                ResourceId: 'parties',
                ResourceDescriptionEn: 'Parties',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadParty',
                PermissionDescriptionEn:
                  'The name of the account and the full legal name(s) of all parties.\r\nOptionally this can also include their address or addresses, telephone ',
                PermissionDescriptionAr:
                  'اسم ومعلومات صاحب الحساب والعنوان البريدي ',
              },
            ],
          },
          {
            DataGroupId: 'AccountTransactions',
            DescriptionEn: 'Your Account Transactions',
            DescriptionAr: 'تفاصيل عمليات الحساب',
            Permissions: [
              {
                ResourceId: 'transactions',
                ResourceDescriptionEn: 'Transactions',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadTransactionsCredits',
                PermissionDescriptionEn:
                  'Details of your incoming transactions',
                PermissionDescriptionAr: 'تفاصيل عن العمليات الواردة',
              },
              {
                ResourceId: 'transactions',
                ResourceDescriptionEn: 'Transactions',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadTransactionsDebits',
                PermissionDescriptionEn:
                  'Details of your outgoing transactions',
                PermissionDescriptionAr: 'تفاصيل عن العمليات المنفذة',
              },
              {
                ResourceId: 'transactions',
                ResourceDescriptionEn: 'Transactions',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadTransactionsBasic',
                PermissionDescriptionEn: 'Your transactions',
                PermissionDescriptionAr: 'عمليات الحساب',
              },
              {
                ResourceId: 'transactions',
                ResourceDescriptionEn: 'Transactions',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadTransactionsDetail',
                PermissionDescriptionEn: 'Details of your transactions',
                PermissionDescriptionAr: 'تفاصيل عمليات الحساب',
              },
            ],
          },
        ],
        TransactionFromDateTime: '2023-12-31T22:00:00.000Z',
        TransactionToDateTime: '2025-08-28T07:14:15.411Z',
        LastDataSharedDateTime: '2024-09-29T20:28:59.673Z',
        AccountTypesList: ['KSAOB.Retail'],
        AccountSubTypesList: ['CurrentAccount'],
        OnBehalfOf: {
          TradingName: 'Acme Accounting Trading Name',
          LegalName: 'Acme Accounting Legal Name',
          IdentifierType: 'Other',
          Identifier: 'abcd1234',
        },
        PurposeList: ['Account Aggregation'],
        SecurityProfile: 'Redirection',
      },
    ],
  },
  Links: {
    Self: 'https://test.api.neotek.sa/accounts-information/v1/accounts-links?PSUId=255cc&Page=1',
    First:
      'https://test.api.neotek.sa/accounts-information/v1/accounts-links?PSUId=255cc&Page=1',
    Next: 'https://test.api.neotek.sa/accounts-information/v1/accounts-links?PSUId=255cc&Page=2',
    Last: 'https://test.api.neotek.sa/accounts-information/v1/accounts-links?PSUId=255cc&Page=11',
  },
  Meta: {
    TotalPages: 11,
  },
};

export const getAccountLinkAccountsDetailsData = {
  Data: {
    AccountsLinks: [
      {
        AccountsLinkId: '226005568353644730747806921460',
        PSUId: '255cc',
        UserLoginId: 'RJHISARI_',
        FinancialInstitution: {
          FinancialInstitutionId: 'BSFRSARI',
          NameEn: 'Banque Saudi Fransi',
          NameAr: 'البنك السعودي الفرنسي',
        },
        CreationDateTime: '2024-10-07T10:09:59.160Z',
        Status: 'Active',
        StatusUpdateDateTime: '2024-10-07T10:09:59.160Z',
        Accounts: [
          'e04e4f47-c389-47a2-ba66-2817eb5f617e',
          '3ecab43a-96fd-4c84-88ca-cd0973a9ac42',
          '9c117c11-3796-4e77-988c-1c848cdf4fe3',
          '432f171f-ec17-48f4-832c-ff37c19d2da3',
          '1051bd75-4ab0-43b7-b9ba-a1c6fdc782c5',
          '7bfe314f-c5d5-4139-8297-6b1a79a35d6e',
        ],
        DataGroups: [
          {
            DataGroupId: 'AccountDetails',
            DescriptionEn: 'Your Account Details',
            DescriptionAr: 'تفاصيل وبيانات الحساب',
            Permissions: [
              {
                ResourceId: 'accounts',
                ResourceDescriptionEn: 'Accounts',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadAccountsBasic',
                PermissionDescriptionEn:
                  'Any other name by which you refer to this account',
                PermissionDescriptionAr: 'لاسم المختصر لحسابك',
              },
              {
                ResourceId: 'accounts',
                ResourceDescriptionEn: 'Accounts',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadAccountsDetail',
                PermissionDescriptionEn: 'Your account name and number',
                PermissionDescriptionAr: 'معلومات وتفاصيل حساب',
              },
              {
                ResourceId: 'balances',
                ResourceDescriptionEn: 'Balances',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadBalances',
                PermissionDescriptionEn: 'Your account balance',
                PermissionDescriptionAr: 'رصيد حسابك',
              },
            ],
          },
          {
            DataGroupId: 'RegularPayments',
            DescriptionEn: 'Your Regular Payments',
            DescriptionAr: 'بيانات عمليات المدفوعات',
            Permissions: [
              {
                ResourceId: 'standing-orders',
                ResourceDescriptionEn: 'Standing Orders',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadStandingOrdersDetail',
                PermissionDescriptionEn: 'Details of your Standing Orders',
                PermissionDescriptionAr: 'الآوامر المستدامة',
              },
              {
                ResourceId: 'direct-debits',
                ResourceDescriptionEn: 'Direct Debits',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadDirectDebits',
                PermissionDescriptionEn: 'Your Direct Debits\t',
                PermissionDescriptionAr: 'تفاصيل عن الحسم المباشر',
              },
              {
                ResourceId: 'scheduled-payments',
                ResourceDescriptionEn: 'Scheduled Payments',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadScheduledPaymentsBasic',
                PermissionDescriptionEn:
                  'Recurring and future dated payments from your card account',
                PermissionDescriptionAr: 'مدفوعات بطاقتك المتكررة والمجدولة',
              },
              {
                ResourceId: 'scheduled-payments',
                ResourceDescriptionEn: 'Scheduled Payments',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadScheduledPaymentsDetail',
                PermissionDescriptionEn:
                  'Details of recurring and future dated payments from your card account\t',
                PermissionDescriptionAr: '',
              },
              {
                ResourceId: 'beneficiaries',
                ResourceDescriptionEn: 'Beneficiaries',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadBeneficiariesBasic',
                PermissionDescriptionEn: 'Payee agreements you have set up',
                PermissionDescriptionAr: 'اسماء المعرفيين والمستفيدين بحسابك',
              },
              {
                ResourceId: 'beneficiaries',
                ResourceDescriptionEn: 'Beneficiaries',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadBeneficiariesDetail',
                PermissionDescriptionEn:
                  'Details of Payee agreements you have set up',
                PermissionDescriptionAr: 'تفاصيل المعرفيين والمستفيدين بحسابك',
              },
              {
                ResourceId: 'standing-orders',
                ResourceDescriptionEn: 'Standing Orders',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadStandingOrdersBasic',
                PermissionDescriptionEn: 'Your Standing Orders',
                PermissionDescriptionAr: 'الطلبات القائمة',
              },
            ],
          },
          {
            DataGroupId: 'PartyDetails',
            DescriptionEn: 'Contact and party details',
            DescriptionAr: 'المعلومات الشخصية',
            Permissions: [
              {
                ResourceId: 'parties',
                ResourceDescriptionEn: 'Parties',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadPartyPSU',
                PermissionDescriptionEn:
                  'The name of the account and your full legal name.\r\nOptionally this can also include your address, telephone numbers and email',
                PermissionDescriptionAr:
                  'اسم الحساب والاسم الكامل لصاحب الحساب، بالإضافة إلى العنوان البريدي',
              },
              {
                ResourceId: 'parties',
                ResourceDescriptionEn: 'Parties',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadPartyPSUIdentity',
                PermissionDescriptionEn:
                  'The name of the account, address, date of birth, national ID and residency number\tThe account name, address, date of birth, national ID and residency number',
                PermissionDescriptionAr:
                  'الاسم والعنوان البريدي وتاريخ الميلاد ومعلومات الهوية او الإقامة',
              },
              {
                ResourceId: 'parties',
                ResourceDescriptionEn: 'Parties',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadParty',
                PermissionDescriptionEn:
                  'The name of the account and the full legal name(s) of all parties.\r\nOptionally this can also include their address or addresses, telephone ',
                PermissionDescriptionAr:
                  'اسم ومعلومات صاحب الحساب والعنوان البريدي ',
              },
            ],
          },
          {
            DataGroupId: 'AccountTransactions',
            DescriptionEn: 'Your Account Transactions',
            DescriptionAr: 'تفاصيل عمليات الحساب',
            Permissions: [
              {
                ResourceId: 'transactions',
                ResourceDescriptionEn: 'Transactions',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadTransactionsCredits',
                PermissionDescriptionEn:
                  'Details of your incoming transactions',
                PermissionDescriptionAr: 'تفاصيل عن العمليات الواردة',
              },
              {
                ResourceId: 'transactions',
                ResourceDescriptionEn: 'Transactions',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadTransactionsDebits',
                PermissionDescriptionEn:
                  'Details of your outgoing transactions',
                PermissionDescriptionAr: 'تفاصيل عن العمليات المنفذة',
              },
              {
                ResourceId: 'transactions',
                ResourceDescriptionEn: 'Transactions',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadTransactionsBasic',
                PermissionDescriptionEn: 'Your transactions',
                PermissionDescriptionAr: 'عمليات الحساب',
              },
              {
                ResourceId: 'transactions',
                ResourceDescriptionEn: 'Transactions',
                ResourceDescriptionAr: 'Desc',
                PermissionId: 'ReadTransactionsDetail',
                PermissionDescriptionEn: 'Details of your transactions',
                PermissionDescriptionAr: 'تفاصيل عمليات الحساب',
              },
            ],
          },
        ],
        LastDataSharedDateTime: '2024-10-07T13:48:21.673Z',
        AccountTypesList: ['KSAOB.Retail'],
        AccountSubTypesList: ['CurrentAccount'],
        OnBehalfOf: {
          TradingName: 'Acme Accounting Trading Name',
          LegalName: 'Acme Accounting Legal Name',
          IdentifierType: 'Other',
          Identifier: 'abcd1234',
        },
        PurposeList: ['Account Aggregation'],
        SecurityProfile: 'Redirection',
      },
    ],
  },
  Links: {
    Self: 'https://test.api.neotek.sa/accounts-information/v1/accounts-links?PSUId=255cc&AccountsLinkId=226005568353644730747806921460&Page=1',
    First:
      'https://test.api.neotek.sa/accounts-information/v1/accounts-links?PSUId=255cc&AccountsLinkId=226005568353644730747806921460&Page=1',
    Last: 'https://test.api.neotek.sa/accounts-information/v1/accounts-links?PSUId=255cc&AccountsLinkId=226005568353644730747806921460&Page=1',
  },
  Meta: {
    TotalPages: 1,
  },
}
export const getDataGroup={
  "Data": {
      "DataGroups": [
          {
              "DataGroupId": "AccountDetails",
              "DescriptionEn": "Your Account Details",
              "DescriptionAr": "تفاصيل وبيانات الحساب",
              "Permissions": [
                  {
                      "ResourceId": "accounts",
                      "ResourceDescriptionEn": "Accounts",
                      "ResourceDescriptionAr": "Desc",
                      "PermissionId": "ReadAccountsBasic",
                      "PermissionDescriptionEn": "Any other name by which you refer to this account",
                      "PermissionDescriptionAr": "لاسم المختصر لحسابك"
                  },
                  {
                      "ResourceId": "accounts",
                      "ResourceDescriptionEn": "Accounts",
                      "ResourceDescriptionAr": "Desc",
                      "PermissionId": "ReadAccountsDetail",
                      "PermissionDescriptionEn": "Your account name and number",
                      "PermissionDescriptionAr": "معلومات وتفاصيل حساب"
                  },
                  {
                      "ResourceId": "balances",
                      "ResourceDescriptionEn": "Balances",
                      "ResourceDescriptionAr": "Desc",
                      "PermissionId": "ReadBalances",
                      "PermissionDescriptionEn": "Your account balance",
                      "PermissionDescriptionAr": "رصيد حسابك"
                  }
              ]
          },
          {
              "DataGroupId": "RegularPayments",
              "DescriptionEn": "Your Regular Payments",
              "DescriptionAr": "بيانات عمليات المدفوعات",
              "Permissions": [
                  {
                      "ResourceId": "standing-orders",
                      "ResourceDescriptionEn": "Standing Orders",
                      "ResourceDescriptionAr": "Desc",
                      "PermissionId": "ReadStandingOrdersDetail",
                      "PermissionDescriptionEn": "Details of your Standing Orders",
                      "PermissionDescriptionAr": "الآوامر المستدامة"
                  },
                  {
                      "ResourceId": "direct-debits",
                      "ResourceDescriptionEn": "Direct Debits",
                      "ResourceDescriptionAr": "Desc",
                      "PermissionId": "ReadDirectDebits",
                      "PermissionDescriptionEn": "Your Direct Debits\t",
                      "PermissionDescriptionAr": "تفاصيل عن الحسم المباشر"
                  },
                  {
                      "ResourceId": "scheduled-payments",
                      "ResourceDescriptionEn": "Scheduled Payments",
                      "ResourceDescriptionAr": "Desc",
                      "PermissionId": "ReadScheduledPaymentsBasic",
                      "PermissionDescriptionEn": "Recurring and future dated payments from your card account",
                      "PermissionDescriptionAr": "مدفوعات بطاقتك المتكررة والمجدولة"
                  },
                  {
                      "ResourceId": "scheduled-payments",
                      "ResourceDescriptionEn": "Scheduled Payments",
                      "ResourceDescriptionAr": "Desc",
                      "PermissionId": "ReadScheduledPaymentsDetail",
                      "PermissionDescriptionEn": "Details of recurring and future dated payments from your card account\t"
                  },
                  {
                      "ResourceId": "beneficiaries",
                      "ResourceDescriptionEn": "Beneficiaries",
                      "ResourceDescriptionAr": "Desc",
                      "PermissionId": "ReadBeneficiariesBasic",
                      "PermissionDescriptionEn": "Payee agreements you have set up",
                      "PermissionDescriptionAr": "اسماء المعرفيين والمستفيدين بحسابك"
                  },
                  {
                      "ResourceId": "beneficiaries",
                      "ResourceDescriptionEn": "Beneficiaries",
                      "ResourceDescriptionAr": "Desc",
                      "PermissionId": "ReadBeneficiariesDetail",
                      "PermissionDescriptionEn": "Details of Payee agreements you have set up",
                      "PermissionDescriptionAr": "تفاصيل المعرفيين والمستفيدين بحسابك"
                  },
                  {
                      "ResourceId": "standing-orders",
                      "ResourceDescriptionEn": "Standing Orders",
                      "ResourceDescriptionAr": "Desc",
                      "PermissionId": "ReadStandingOrdersBasic",
                      "PermissionDescriptionEn": "Your Standing Orders",
                      "PermissionDescriptionAr": "الطلبات القائمة"
                  }
              ]
          },
          {
              "DataGroupId": "PartyDetails",
              "DescriptionEn": "Contact and party details",
              "DescriptionAr": "المعلومات الشخصية",
              "Permissions": [
                  {
                      "ResourceId": "parties",
                      "ResourceDescriptionEn": "Parties",
                      "ResourceDescriptionAr": "Desc",
                      "PermissionId": "ReadPartyPSU",
                      "PermissionDescriptionEn": "The name of the account and your full legal name.\r\nOptionally this can also include your address, telephone numbers and email",
                      "PermissionDescriptionAr": "اسم الحساب والاسم الكامل لصاحب الحساب، بالإضافة إلى العنوان البريدي"
                  },
                  {
                      "ResourceId": "parties",
                      "ResourceDescriptionEn": "Parties",
                      "ResourceDescriptionAr": "Desc",
                      "PermissionId": "ReadPartyPSUIdentity",
                      "PermissionDescriptionEn": "The name of the account, address, date of birth, national ID and residency number\tThe account name, address, date of birth, national ID and residency number",
                      "PermissionDescriptionAr": "الاسم والعنوان البريدي وتاريخ الميلاد ومعلومات الهوية او الإقامة"
                  },
                  {
                      "ResourceId": "parties",
                      "ResourceDescriptionEn": "Parties",
                      "ResourceDescriptionAr": "Desc",
                      "PermissionId": "ReadParty",
                      "PermissionDescriptionEn": "The name of the account and the full legal name(s) of all parties.\r\nOptionally this can also include their address or addresses, telephone ",
                      "PermissionDescriptionAr": "اسم ومعلومات صاحب الحساب والعنوان البريدي "
                  }
              ]
          },
          {
              "DataGroupId": "AccountTransactions",
              "DescriptionEn": "Your Account Transactions",
              "DescriptionAr": "تفاصيل عمليات الحساب",
              "Permissions": [
                  {
                      "ResourceId": "transactions",
                      "ResourceDescriptionEn": "Transactions",
                      "ResourceDescriptionAr": "Desc",
                      "PermissionId": "ReadTransactionsCredits",
                      "PermissionDescriptionEn": "Details of your incoming transactions",
                      "PermissionDescriptionAr": "تفاصيل عن العمليات الواردة"
                  },
                  {
                      "ResourceId": "transactions",
                      "ResourceDescriptionEn": "Transactions",
                      "ResourceDescriptionAr": "Desc",
                      "PermissionId": "ReadTransactionsDebits",
                      "PermissionDescriptionEn": "Details of your outgoing transactions",
                      "PermissionDescriptionAr": "تفاصيل عن العمليات المنفذة"
                  },
                  {
                      "ResourceId": "transactions",
                      "ResourceDescriptionEn": "Transactions",
                      "ResourceDescriptionAr": "Desc",
                      "PermissionId": "ReadTransactionsBasic",
                      "PermissionDescriptionEn": "Your transactions",
                      "PermissionDescriptionAr": "عمليات الحساب"
                  },
                  {
                      "ResourceId": "transactions",
                      "ResourceDescriptionEn": "Transactions",
                      "ResourceDescriptionAr": "Desc",
                      "PermissionId": "ReadTransactionsDetail",
                      "PermissionDescriptionEn": "Details of your transactions",
                      "PermissionDescriptionAr": "تفاصيل عمليات الحساب"
                  }
              ]
          }
      ]
  }
}


export const FinancialInstitution={
  "Data": {
      "FinancialInstitution": [
          {
              "FinancialInstitutionId": "RJHISARI",
              "FinancialInstitutionName": {
                  "NameEn": "Alrajhi Bank",
                  "NameAr": "بنك الراجحي"
              },
              "SecurityProfiles": [
                  "Redirection"
              ],
              "IsActive": true
          },
          {
              "FinancialInstitutionId": "INMASARI",
              "FinancialInstitutionName": {
                  "NameEn": "Alinma Bank",
                  "NameAr": "مصرف الانماء"
              },
              "SecurityProfiles": [
                  "Redirection"
              ],
              "IsActive": true
          },
          {
              "FinancialInstitutionId": "BSFRSARI",
              "FinancialInstitutionName": {
                  "NameEn": "Banque Saudi Fransi",
                  "NameAr": "البنك السعودي الفرنسي"
              },
              "SecurityProfiles": [
                  "Redirection"
              ],
              "IsActive": true
          },
          {
              "FinancialInstitutionId": "SAMAModelBank",
              "FinancialInstitutionName": {
                  "NameEn": "SAMA Model Bank",
                  "NameAr": "البنك المركزي السعودي"
              },
              "SecurityProfiles": [
                  "Redirection"
              ],
              "IsActive": true
          }
      ]
  },
  "Links": {
      "Self": "https://test.api.neotek.sa/financial-institutions-information/v1/financial-institutions?Page=1",
      "First": "https://test.api.neotek.sa/financial-institutions-information/v1/financial-institutions?Page=1",
      "Last": "https://test.api.neotek.sa/financial-institutions-information/v1/financial-institutions?Page=1"
  },
  "Meta": {
      "TotalPages": 1
  }
}

