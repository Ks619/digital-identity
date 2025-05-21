
import React from 'react';
import MainLayout from '../layout/MainLayout';
import SectionHeader from '../components/SectionHeader';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';

const Recommendations = () => {
  // Function to render rating as text badge
  const renderRating = (rating: number) => {
    return (
      <div className="flex flex-col items-center gap-2">
        <Badge variant="outline" className="bg-tech-100 text-tech-500 px-3 py-1 text-sm font-medium">
          Rating: {rating.toFixed(1)}/5
        </Badge>
      </div>
    );
  };

  return (
    <MainLayout>
      <div className="min-h-[15vh] relative flex items-center justify-center bg-tech-700">
        <div className="absolute inset-0 bg-tech-600/80"></div>
        <div className="container mx-auto z-10 px-4 py-4">
          <h1 className="text-4xl font-bold text-white text-center">Recommendation Letters</h1>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <Card className="border-none shadow-lg mb-12">
            <CardContent className="p-8">
              <div className="flex justify-center mb-4">
                {renderRating(5)}
              </div>
              <h2 className="text-2xl font-bold text-center mb-6">Yaniv Development Team Lead</h2>
              <div className="max-w-4xl mx-auto text-right" dir="rtl" lang="he">
                <p className="mb-4">
                  רציתי לשתף המלצה חמה על כפיר שוסטר, שעבד איתי כשנה. הוא מוביל אבטחה בצוות שלי, אבל לאחרונה הוא עזב על מנת להתמקד על הפיתוח אופרטיבי של תוכניתון.
                </p>
                <p className="mb-4">
                  כפיר הוא מפתח שאוהב לפתור בעיות - הוא לומד מהר, נגיש למשימה ויצירתי בחשיבה, ותומך אחרים אמיתי. הוא לא חושש להתמודד עם אתגרים חדשים, שמסייע רבות בהבנה מהירה של בעיות טכניות מורכבות.
                </p>
                <p className="mb-4">
                  כפיר גם ניחן ביחסי האנוש טובים, בייחוד ביכולת התקשורת והעבודה המשותפת עם אנשים אחרים שונים בחברה. תמיד היה נעים לעבוד איתו, והוא גם לאדוורד מקצועית ותפתח בהבאת.
                </p>
                <p>
                  אני ממליץ עליו בלב שלם, בטוח שהוא יתרום לכם כפי שתרם אצלי, ואשמח לתת לו המלצה רבה במקשר.
                </p>
              </div>
            </CardContent>
          </Card>

          <Separator className="my-12 max-w-2xl mx-auto" />

          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <div className="flex justify-center mb-4">
                {renderRating(4.5)}
              </div>
              <h2 className="text-2xl font-bold text-center mb-6">Aviv Development Team Lead</h2>
              <div className="max-w-4xl mx-auto text-right" dir="rtl" lang="he">
                <p className="mb-4">
                  אני שמחתי להמליץ על כפיר שוסטר, שעבד לצידי במשך חולפה משמעותית. בתחילת דרכו בחברה הוא עסק בבדיקת תוכנה, ובהמשך עבר לתפקיד פיתוח, בו שימש כפיתח אוטומציה באופן יעיל במיוחד.
                </p>
                <p className="mb-4">
                  כפיר היראה לאורך כל הדרך מחויבות גבוהה, סקרנות מקצועית ונכונות לתפתרון בעיות. הוא נגש למשימות בצורה מדוקדקת, עם הבנה מעמיקה של הדרישות העסקיות, ותמיד עמד בזמנים שהוגדרו על מימוש פעולות עם חברי הצוות.
                </p>
                <p className="mb-4">
                  הוא מביא איתו אנרגיה חיובית, תקשורתיות ומוכנות לייעור - מה שתורם לא רק להצלחה המקצועית, אלא גם לדינמיקה החיובית איתו תמיד הייתה נעימה.
                </p>
                <p>
                  אני בטוח שכפיר יהיה חיזוק משמעותי בכל מסגרת פיתוח, וממליץ עליו בחום!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </MainLayout>
  );
};

export default Recommendations;
