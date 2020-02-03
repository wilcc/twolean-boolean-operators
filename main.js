/********************
 * YOUR CODE BELOW! *
 ********************/
function moreThan5(five){
  return five>5
}
function topScore(score, topScore){
  return score>topScore
}
function isInDanger(score){
  return score >= 60 && score <=71;
}

function isCoasting(score){
  return score >= 72 && score <= 83;
}

function isSucceeding(score){
  return score >= 84 && score <= 92;
}

function isFailing(score){
  return score < 60
}

function isAcing(score){
  return score > 92
}

function isStudent(name){
  return name === 'student';
}

function isTeacher(name){
  return name === 'teacher'
}

function isAdmin(name){
  return name ==='admin'
}
function isElementary(name){
  return name ==='elementary'
}
function isMiddleSchoolTeacher(role,level){
  return role === 'teacher' && level >= 6 && level <=8;
}

function notAnElementarySchoolAdministrator(level,role){
  return level !== 'elementary' || role !== 'admin'
}
function differentPeople(name1,name2){
  return name1 !== name2 
}

/********************************************************************************************
 * CODE BELOW IS FOR EXPORTING THE VARIABLES AND FUNCTIONS YOU WROTE ABOVE TO MAIN.TEST.JS. *
 *                              THIS IS FOR INTERNAL USE ONLY                               *
 *                          DON'T ADD TO OR CHANGE ANYTHING BELOW!                          *
 ********************************************************************************************/


if (typeof moreThan5 === 'undefined') {
  moreThan5 = undefined;
}

if (typeof topScore === 'undefined') {
  topScore = undefined;
}

if (typeof isInDanger === 'undefined') {
  isInDanger = undefined;
}

if (typeof isCoasting === 'undefined') {
  isCoasting = undefined;
}

if (typeof isSucceeding === 'undefined') {
  isSucceeding = undefined;
}

if (typeof isFailing === 'undefined') {
  isFailing = undefined;
}

if (typeof isAcing === 'undefined') {
  isAcing = undefined;
}

if (typeof isStudent === 'undefined') {
  isStudent = undefined;
}

if (typeof isTeacher === 'undefined') {
  isTeacher = undefined;
}

if (typeof isAdmin === 'undefined') {
  isAdmin = undefined;
}

if (typeof isElementary === 'undefined') {
  isElementary = undefined;
}

if (typeof notAnElementarySchoolAdministrator === 'undefined') {
  notAnElementarySchoolAdministrator = undefined;
}

if (typeof isMiddleSchoolTeacher === 'undefined') {
  isMiddleSchoolTeacher = undefined;
}

if (typeof differentPeople === 'undefined') {
  differentPeople = undefined;
}


module.exports = {
  moreThan5,
  topScore,
  isInDanger,
  isCoasting,
  isSucceeding,
  isFailing,
  isAcing,
  isStudent,
  isTeacher,
  isAdmin,
  isElementary,
  notAnElementarySchoolAdministrator,
  isMiddleSchoolTeacher,
  differentPeople,
}