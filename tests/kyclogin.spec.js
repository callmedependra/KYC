// import { test, expect } from '@playwright/test';

// test.describe('@smoke @critical KYC Login & Registration Flow', () => {
//   test('Login and complete KYC registration', async ({ page }) => {

//     // Login
//     await page.goto('/login');
//     await page.getByRole('textbox', { name: 'Email' }).fill('669a6@powerscrews.com');
//     await page.getByRole('textbox', { name: 'Password' }).fill('@teSt12345');
//     await page.getByRole('textbox', { name: 'Captcha' }).fill('7107x');
//     await page.getByRole('button', { name: 'Login', exact: true }).click();
//     await page.waitForURL('https://newkyc.dghub.io/kyc/kyc/home');

//     // KYC Registration
    // await page.getByRole('button', { name: 'Continue Registration' }).click(); 
//      await page.getByRole('button', { name: 'Start Registration' }).click();

//     await page.getByRole('textbox', { name: 'First Name' }).fill('Dependra');
//     await page.getByRole('textbox', { name: 'Last Name' }).fill('Thapa');
//     await page.getByRole('combobox', { name: 'First Name (Devanagari)' }).fill('Dipendra');
//     await page.getByRole('option', { name: 'दिपेन्द्र' }).click();
//     await page.getByRole('combobox', { name: 'Last Name (Devanagari)' }).fill('thapa');
//     await page.getByRole('option', { name: 'थापा' }).click();

//     await page.getByRole('textbox', { name: 'Date of Birth (A.D.)' }).fill('MM/DD/YYYY2');
//     await page.getByRole('button', { name: 'Choose date' }).click();
//     await page.getByRole('button', { name: 'calendar view is open, switch' }).click();
//     await page.getByRole('radio', { name: '2003' }).click();
//     await page.getByRole('gridcell', { name: '1', exact: true }).click();

//     await page.getByRole('combobox', { name: 'Gender' }).click();
//     await page.getByRole('option', { name: 'Male', exact: true }).click();

//     await page.getByRole('button', { name: 'Open' }).nth(4).click();
//     await page.getByRole('option', { name: 'Nepal' }).click();
//     await page.getByRole('button', { name: 'Next' }).click();
//      await page.pause();
//   await page.waitForURL('https://newkyc.dghub.io/kyc/kyc/demat-registration/i/document-details');
//   await page.getByRole('button', { name: '+ Add' }).click();
//   await page.getByRole('button', { name: 'Open' }).click();
//   await page.getByRole('option', { name: 'Signature' }).click();
//   await page.getByText('Browse').click();
//   await page.locator('div').filter({ hasText: /^Drag your image here or BrowseSupports: PNG\/JPG up to 3 MB accepted$/ }).first().setInputFiles('porshe.jpeg');
  // await page.getByRole('button', { name: 'Add Document' }).click();
  // await page.getByRole('button', { name: '+ Add' }).click();
  // await page.getByRole('button', { name: 'Open' }).click();
  // await page.getByRole('option', { name: 'Thumb Print' }).click();
  // await page.getByText('Browse').first().click();
  // await page.locator('div').filter({ hasText: /^Drag your image here or BrowseSupports: PNG\/JPG up to 3 MB accepted$/ }).first().setInputFiles('porshe.jpeg');
  // await page.getByText('Browse').click();
  // await page.locator('div').filter({ hasText: /^Drag your image here or BrowseSupports: PNG\/JPG up to 3 MB accepted$/ }).first().setInputFiles('porshe.jpeg');
//   await page.getByRole('button', { name: 'Add Document' }).click();
//   await page.getByRole('button', { name: '+ Add' }).click();
//   await page.getByRole('button', { name: 'Open' }).click();
//   await page.getByRole('option', { name: 'Passport Size Photo' }).click();
//   await page.getByText('Browse').click();
//   await page.locator('div').filter({ hasText: /^Drag your image here or BrowseSupports: PNG\/JPG up to 3 MB accepted$/ }).first().setInputFiles('porshe.jpeg');
//   await page.getByRole('button', { name: 'Add Document' }).click();
//   await page.getByRole('button', { name: '+ Add' }).click();
//   await page.getByRole('button', { name: 'Open' }).click();
//   await page.getByRole('option', { name: 'Citizenship' }).click();
//   await page.getByRole('textbox', { name: 'Citizenship No.' }).click();
//   await page.getByRole('textbox', { name: 'Citizenship No.' }).fill('23456789');
//   await page.getByRole('combobox', { name: 'Citizenship Issued District' }).click();
//   await page.getByRole('option', { name: 'KATHMANDU' }).click();
//   await page.getByRole('button', { name: 'Choose date' }).click();
//   await page.getByRole('gridcell', { name: '14' }).click();
//   await page.getByText('Browse').first().click();
//   await page.locator('div').filter({ hasText: /^Drag your image here or BrowseSupports: PNG\/JPG up to 3 MB accepted$/ }).first().setInputFiles('porshe.jpeg');
//   await page.getByText('Browse').click();
//   await page.locator('div').filter({ hasText: /^Drag your image here or BrowseSupports: PNG\/JPG up to 3 MB accepted$/ }).first().setInputFiles('porshe.jpeg');
//   await page.getByRole('button', { name: 'Add Document' }).click();
//   await page.getByRole('button', { name: '+ Add' }).click();
//   await page.getByRole('button', { name: 'Open' }).click();
//   await page.getByRole('option', { name: 'Selfie With Document' }).click();
//   await page.getByText('Browse').click();
//   await page.locator('div').filter({ hasText: /^Drag your image here or BrowseSupports: PNG\/JPG up to 3 MB accepted$/ }).first().setInputFiles('porshe.jpeg');
//   await page.getByRole('button', { name: 'Add Document' }).click();
//   await page.getByRole('button', { name: 'Next' }).click();
//   await page.getByRole('combobox', { name: 'Country' }).click();
//   await page.getByRole('option', { name: 'Nepal' }).click();
//   await page.getByRole('combobox', { name: 'Province' }).click();
//   await page.getByRole('option', { name: 'Bagmati Pradesh' }).click();
//   await page.getByRole('combobox', { name: 'District' }).click();
//   await page.getByRole('option', { name: 'KATHMANDU' }).click();
//   await page.getByRole('combobox', { name: 'Rural Municipality/' }).click();
//   await page.getByRole('option', { name: 'BUDHANILKANTHA MUNICIPALITY' }).click();
//   await page.getByRole('textbox', { name: 'Ward No.' }).click();
//   await page.getByRole('textbox', { name: 'Ward No.' }).fill('03');
//   await page.getByRole('textbox', { name: 'Tole' }).click();
//   await page.getByRole('textbox', { name: 'Tole' }).fill('Budhanilkantha');
//   await page.getByRole('textbox', { name: 'Telephone No.' }).click();
//   await page.getByRole('textbox', { name: 'Telephone No.' }).fill('017856745');
//   await page.getByText('Browse').click();
//   await page.locator('div').filter({ hasText: /^Drag your image here or BrowseSupports: PNG\/ JPG up to 3 MB accepted$/ }).first().setInputFiles('porshe.jpeg');
//   await page.getByRole('button', { name: 'Next' }).click();
//   await page.waitForURL('https://newkyc.dghub.io/kyc/kyc/demat-registration/i/address-details');
//   await page.getByRole('button', { name: 'Confirm' }).click();
//   await page.locator('input[name="personDetail.0.[personDetail].fname"]').click();
//   await page.locator('input[name="personDetail.0.[personDetail].fname"]').fill('Dipak');
//   await page.locator('input[name="personDetail.0.[personDetail].lname"]').click();
//   await page.locator('input[name="personDetail.0.[personDetail].lname"]').fill('thapa');
//   await page.locator('input[name="personDetail.0.[personDetail].lname"]').click();
//   await page.locator('input[name="personDetail.0.[personDetail].lname"]').fill('Thapa');
//   await page.locator('input[name="personDetail.0.[personDetail].fnameNep"]').click();
//   await page.locator('input[name="personDetail.0.[personDetail].fnameNep"]').fill('dipak');
//   await page.getByRole('option', { name: 'दिपक' }).click();
//   await page.locator('input[name="personDetail.0.[personDetail].lnameNep"]').click();
//   await page.locator('input[name="personDetail.0.[personDetail].lnameNep"]').fill('Thapa');
//   await page.getByRole('option', { name: 'थापा' }).click();
//   await page.locator('input[name="personDetail.1.[personDetail].fname"]').click();
//   await page.locator('input[name="personDetail.1.[personDetail].fname"]').fill('chakra');
//   await page.locator('input[name="personDetail.1.[personDetail].lname"]').click();
//   await page.locator('input[name="personDetail.1.[personDetail].lname"]').fill('Thapa');
//   });
// });

import { test, expect } from '@playwright/test';
import path from 'path';

// File paths for uploads
const filePath = path.join(__dirname, 'assets/porshe.jpeg');
const leftThumbPath = path.join(__dirname, 'assets/porshe.jpeg');
const rightThumbPath = path.join(__dirname, 'assets/porshe.jpeg');

// Helper to upload multiple files for a single Add Document action
async function uploadDoc(page, docType, files) {
  await page.getByRole('button', { name: '+ Add' }).click();
  await page.getByRole('button', { name: 'Open' }).click();
  await page.getByRole('option', { name: docType }).click();

  for (let i = 0; i < files.length; i++) {
    await page.locator('input[type="file"]:visible').nth(i).setInputFiles(files[i]);
  }

  await page.getByRole('button', { name: 'Add Document' }).click();
}

// Helper to upload two files (with optional 3-second delay between uploads)
async function uploadDoubleDoc(page, docType, file1, file2, extraFieldsFn) {
  await page.getByRole('button', { name: '+ Add' }).click();
  await page.getByRole('button', { name: 'Open' }).click();
  await page.getByRole('option', { name: docType }).click();

  // Fill extra fields if provided
  if (extraFieldsFn) {
    await extraFieldsFn();
  }

  const fileInputs = await page.locator('input[type="file"]:visible').count();
  
  if (fileInputs > 1) {
    // Upload first file
    await page.locator('input[type="file"]:visible').nth(0).setInputFiles(file1);

    // Wait 3 seconds before uploading the second file
    await page.waitForTimeout(3000);

    // Upload second file
     await page.locator('input[type="file"]:visible').nth(0).setInputFiles(file1);
  } else {
    // If only one file input supports multiple files
    await page.locator('input[type="file"]:visible').first().setInputFiles([file1, file2]);
  }

  await page.getByRole('button', { name: 'Add Document' }).click();
}

test.describe('@smoke @critical KYC Login & Registration Flow', () => {
  test('Login and complete KYC registration', async ({ page }) => {

    // Login
    await page.goto('/login');
    await page.getByRole('textbox', { name: 'Email' }).fill('669a6@powerscrews.com');
    await page.getByRole('textbox', { name: 'Password' }).fill('@teSt12345');
    await page.getByRole('textbox', { name: 'Captcha' }).fill('7107x');
    await page.getByRole('button', { name: 'Login', exact: true }).click();
    await page.waitForURL('https://newkyc.dghub.io/kyc/kyc/home');

    // KYC Registration
    await page.getByRole('button', { name: 'Continue Registration' }).click();
    await page.getByRole('button', { name: 'Start Registration' }).click();
    await page.getByRole('textbox', { name: 'First Name' }).fill('Dependra');
    await page.getByRole('textbox', { name: 'Last Name' }).fill('Thapa');
    await page.getByRole('combobox', { name: 'First Name (Devanagari)' }).fill('Dipendra');
    await page.getByRole('option', { name: 'दिपेन्द्र' }).click();
    await page.getByRole('combobox', { name: 'Last Name (Devanagari)' }).fill('thapa');
    await page.getByRole('option', { name: 'थापा' }).click();
    await page.getByRole('textbox', { name: 'Date of Birth (A.D.)' }).fill('MM/DD/YYYY2');
    await page.getByRole('button', { name: 'Choose date' }).click();
    await page.getByRole('button', { name: 'calendar view is open, switch' }).click();
    await page.getByRole('radio', { name: '2003' }).click();
    await page.getByRole('gridcell', { name: '1', exact: true }).click();
    await page.getByRole('combobox', { name: 'Gender' }).click();
    await page.getByRole('option', { name: 'Male', exact: true }).click();
    await page.getByRole('button', { name: 'Open' }).nth(4).click();
    await page.getByRole('option', { name: 'Nepal' }).click();
    await page.getByRole('button', { name: 'Next' }).click();

    // Wait for document upload page
    await page.waitForURL('https://newkyc.dghub.io/kyc/kyc/demat-registration/i/document-details');

    // // Upload Signature
    await uploadDoc(page, 'Signature', [filePath]);

    // // Thumb Print: upload left & right with 3-second delay
    await uploadDoubleDoc(page, 'Thumb Print', leftThumbPath, rightThumbPath);
    
    // // Passport Size Photo
    await uploadDoc(page, 'Passport Size Photo', [filePath]);

    // // Citizenship with extra fields + two files
    await uploadDoubleDoc(page, 'Citizenship', filePath, filePath, async () => {
      await page.getByRole('textbox', { name: 'Citizenship No.' }).fill('25456759');
      await page.getByRole('combobox', { name: 'Citizenship Issued District' }).click();
      await page.getByRole('option', { name: 'KATHMANDU' }).click();
      await page.getByRole('button', { name: 'Choose date' }).click();
      await page.getByRole('gridcell', { name: '14' }).click();
    });

    // Selfie with document
    await uploadDoc(page, 'Selfie With Document', [filePath]);
     await page.getByRole('button', { name: 'Next' }).click();

    // // Address details
     await page.waitForURL('https://newkyc.dghub.io/kyc/kyc/demat-registration/i/address-details');
    await page.getByRole('combobox', { name: 'Country' }).click();
    await page.getByRole('option', { name: 'Nepal' }).click();
    await page.getByRole('combobox', { name: 'Province' }).click();
    await page.getByRole('option', { name: 'Bagmati Pradesh' }).click();
    await page.getByRole('combobox', { name: 'District' }).click();
    await page.getByRole('option', { name: 'KATHMANDU' }).click();
    await page.getByRole('combobox', { name: 'Rural Municipality/' }).click();
    await page.getByRole('option', { name: 'BUDHANILKANTHA MUNICIPALITY' }).click();
    await page.getByRole('textbox', { name: 'Ward No.' }).fill('03');
    await page.getByRole('textbox', { name: 'Tole' }).fill('Budhanilkantha');
    await page.getByRole('textbox', { name: 'Telephone No.' }).fill('017856745');

    // // Final file upload in address section
    await page.locator('input[type="file"]:visible').first().setInputFiles(filePath);
    await page.getByRole('button', { name: 'Next' }).click();

    // // Address details confirmation
    await page.waitForURL('https://newkyc.dghub.io/kyc/kyc/demat-registration/i/address-details');
    await page.getByRole('button', { name: 'Confirm' }).click();

    // // Person details
    await page.locator('input[name="personDetail.0.[personDetail].fname"]').fill('Dipak');
    await page.locator('input[name="personDetail.0.[personDetail].lname"]').fill('Thapa');
    await page.locator('input[name="personDetail.0.[personDetail].fnameNep"]').fill('dipak');
    await page.getByRole('option', { name: 'दिपक' }).click();
    await page.locator('input[name="personDetail.0.[personDetail].lnameNep"]').fill('Thapa');
    await page.getByRole('option', { name: 'थापा' }).click();
    await page.locator('input[name="personDetail.1.[personDetail].fname"]').fill('chakra');
    await page.locator('input[name="personDetail.1.[personDetail].lname"]').fill('Thapa');
    await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.waitForURL('https://newkyc.dghub.io/kyc/kyc/demat-registration/i/family-details');
  await page.locator('input[name="personDetail.0.[personDetail].fname"]').click();
  await page.locator('input[name="personDetail.0.[personDetail].fname"]').fill('Chakra');
  await page.locator('input[name="personDetail.0.[personDetail].lname"]').click();
  await page.locator('input[name="personDetail.0.[personDetail].lname"]').fill('Thapa');
  await page.locator('div').filter({ hasText: /^First Name \(Devanagari\)$/ }).first().click();
  await page.locator('input[name="personDetail.0.[personDetail].fnameNep"]').fill('Chakra');
  await page.getByRole('option', { name: 'चक्र', exact: true }).click();
  await page.locator('input[name="personDetail.0.[personDetail].lnameNep"]').click();
  await page.locator('input[name="personDetail.0.[personDetail].lnameNep"]').fill('Thapa');
  await page.getByRole('option', { name: 'थापा' }).click();
  await page.locator('input[name="personDetail.1.[personDetail].fname"]').click();
  await page.locator('input[name="personDetail.1.[personDetail].fname"]').fill('Dipak');
  await page.locator('input[name="personDetail.1.[personDetail].lname"]').click();
  await page.locator('input[name="personDetail.1.[personDetail].lname"]').fill('Thapa');
  await page.locator('input[name="personDetail.1.[personDetail].fnameNep"]').click();
  await page.locator('input[name="personDetail.1.[personDetail].fnameNep"]').fill('Dipak');
  await page.getByRole('option', { name: 'दिपक' }).click();
  await page.locator('input[name="personDetail.1.[personDetail].lnameNep"]').click();
  await page.locator('input[name="personDetail.1.[personDetail].lnameNep"]').fill('Thapa');
  await page.getByRole('option', { name: 'थापा' }).click();
  await page.locator('input[name="personDetail.2.[personDetail].fname"]').click();
  await page.locator('input[name="personDetail.2.[personDetail].fname"]').fill('Gita');
  await page.locator('input[name="personDetail.2.[personDetail].lname"]').click();
  await page.locator('input[name="personDetail.2.[personDetail].lname"]').fill('Thapa');
  await page.locator('input[name="personDetail.2.[personDetail].fnameNep"]').click();
  await page.locator('input[name="personDetail.2.[personDetail].fnameNep"]').fill('Gita');
  await page.getByRole('option', { name: 'गीता' }).click();
  await page.locator('input[name="personDetail.2.[personDetail].lnameNep"]').click();
  await page.locator('input[name="personDetail.2.[personDetail].lnameNep"]').fill('Thapa');
  await page.getByRole('option', { name: 'थापा' }).click();
  await page.getByText('Family DetailsGrand Father *').click({button: 'right'  });
  await page.getByRole('button', { name: 'Next' }).click();
  await page.url('https://newkyc.dghub.io/kyc/kyc/demat-registration/i/bank-details');
  await page.getByRole('button', { name: 'Open' }).first().click();
  await page.getByRole('option', { name: 'Kumari Bank Limited' }).click();
  await page.getByRole('textbox', { name: 'Account Number' }).click();
  await page.getByRole('textbox', { name: 'Account Number' }).fill('1890343201800001');
  await page.getByRole('button', { name: 'Open' }).nth(1).click();
  await page.getByRole('option', { name: 'Current' }).click();
  await page.getByRole('button', { name: 'Open' }).nth(2).click();
  await page.getByRole('option', { name: 'Panipokhari Branch' }).click();
  await page.getByRole('button', { name: '+ Add' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.waitForURL('https://newkyc.dghub.io/kyc/kyc/demat-registration/i/occupation-details');
  await page.getByRole('button', { name: 'Open' }).first().click();
  await page.getByRole('option', { name: 'PRIVATE SECTOR' }).click();
  await page.getByRole('textbox', { name: 'Organization Name' }).click();
  await page.getByRole('textbox', { name: 'Organization Name' }).fill('DG HUB');
  await page.getByRole('textbox', { name: 'Address' }).click();
  await page.getByRole('textbox', { name: 'Address' }).fill('Naxal');
  await page.getByRole('textbox', { name: 'Employee ID' }).click();
  await page.getByRole('textbox', { name: 'Employee ID' }).fill('220474');
  await page.getByRole('textbox', { name: 'Designation' }).click();
  await page.getByRole('textbox', { name: 'Designation' }).fill('Intern');
  await page.getByRole('textbox', { name: 'Effective From' }).click();
  await page.getByRole('button', { name: 'Choose date' }).click();
  await page.getByRole('button', { name: 'Previous month' }).click();
  await page.getByRole('gridcell', { name: '3', exact: true }).click();
  await page.getByRole('combobox', { name: 'Financial Details' }).click();
  await page.getByRole('option', { name: 'Upto Rs.1,00,000' }).click();
  await page.locator('div:nth-child(15) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').click();
  await page.getByRole('option', { name: 'Salary' }).click();
  await page.waitForURL('https://newkyc.dghub.io/kyc/kyc/demat-registration/i/nominee-details');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.waitForURL('https://newkyc.dghub.io/kyc/kyc/demat-registration/i/bo-details');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.waitForURL('https://newkyc.dghub.io/kyc/kyc/demat-registration/i/detail-verification');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.pause();
  });
});
