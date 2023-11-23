'use client';

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const labList = [
  {
    "title": "Getting Started Lab for Employment Service Providers (ESP)",
    "description": "If you're here then you're a passionate employment service provider who’s constantly looking for new tools and concepts. We've prepared a series of Challenges just for you! The Challenges in this Lab are designed to help you learn how you can get the most out of our platform, get started today!"
  },
  {
    "title": "UX Feedback Lab",
    "description": "Our goal is to get useful feedback for PreprLabs pre-react and our redesigned Version on Figma post-react. PreprLabs has different types of users: regular users (the Learners) and those who create their tasks in forms of Labs and Challenges (the Managers).   The next step for you is to start the Challenge within this Lab."
  },
  {
    "title": "Getting Started Lab For Business Chambers",
    "description": "Getting Started Lab For Business Chambers"
  }
]

const challengesList = [
  {
    "title": "DTP & FUN - Team Business Innovation Challenge",
    "description": "How might we better support businesses around us? Businesses around the world have had to adapt over the last 3 years as the nature of sales has diversified and changed, and will need to continue to evolve to meet the realities of a post-pandemic world."
  },
]

const resourcesList = [
  {
    "title": "SFS Digital Deck Activity Answer",
    "description": "Sample answer for Leveraging Digital Tools as a Manager"
  },
  {
    "title": "SFS Digital Tools Deck",
    "description": "SFS Digital Tools Deck"
  }
]

const projectsList = [
  {
    "title": "brenna11 - Frontend Developer Challenge 1: Web Page Creation",
    "description": "First frontend project"
  },
  {
    "title": "brenna11 - Career Planning 2: Explore Career Options",
    "description": "Explore Career Options"
  }
]

const Content = () => {

  return (
    <div className="flex justify-center items-start space-x-10">
      {/* left side accordion */}
      <Accordion type="multiple" collapsible="true" className="w-1/5 p-5">
        <h1 className="text-xl font-semibold">Filters</h1>
        <AccordionItem value="item-1">
          <AccordionTrigger>Duration</AccordionTrigger>
          <AccordionContent>
            {[
              { id: 'lessthantwo', label: 'Less than 2 Hours' },
              { id: 'twotofour', label: '2-4 Hours' },
              { id: 'fourtoeight', label: '4-8 Hours' },
              { id: 'onetotwodays', label: '1-2 Days' },
              { id: 'threetofivedays', label: '3-5 Days' },
              { id: 'morethanfive', label: '5+ Days' },
            ].map(item => (
              <div key={item.id} className="flex items-center space-x-2 mb-2">
                <Checkbox id={item.id} />
                <label htmlFor={item.id} className="text-sm font-medium leading-none">
                  {item.label}
                </label>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Level</AccordionTrigger>
          <AccordionContent>
          {[
              { id: 'beginner', label: 'Beginner' },
              { id: 'intermediate', label: 'Intermediate' },
              { id: 'advanced', label: 'Advanced' },
              { id: 'mixed', label: 'Mixed' },
            ].map(item => (
              <div key={item.id} className="flex items-center space-x-2 mb-2">
                <Checkbox id={item.id} />
                <label htmlFor={item.id} className="text-sm font-medium leading-none">
                  {item.label}
                </label>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Organizations</AccordionTrigger>
          <AccordionContent>
          {[
              { id: 'prepr', label: 'Prepr' },
              { id: 'linuxfoundation', label: 'Linux Foundation' },
              { id: 'magnet', label: 'Magnet' },
              { id: 'certnexus', label: 'CertNexus' },
              { id: 'ontcbc', label: 'Ontario Chamber of Commerce' },
              { id: 'youthboost', label: 'Youth Boost' },
            ].map(item => (
              <div key={item.id} className="flex items-center space-x-2 mb-2">
                <Checkbox id={item.id} />
                <label htmlFor={item.id} className="text-sm font-medium leading-none">
                  {item.label}
                </label>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Skills</AccordionTrigger>
          <AccordionContent>
            <input
              type="text"
              placeholder="Search your skills..."
              className="p-2 rounded-full pl-4 w-full mb-4"
              onChange={(e) => handleSearch(e.target.value)}
            />
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Tabs defaultValue="labs" className="max-w-screen-lg w-2/3 lg:mx-auto md:mx-0 p-5">
        <TabsList className="grid grid-cols-4 mb-4">
          <TabsTrigger className="focus:bg-primary dark:focus:bg-secondary text-xl" value="labs">Labs</TabsTrigger>
          <TabsTrigger className="focus:bg-primary dark:focus:bg-secondary text-xl" value="challenges">Challenges</TabsTrigger>
          <TabsTrigger className="focus:bg-primary dark:focus:bg-secondary text-xl" value="resources">Resources</TabsTrigger>
          <TabsTrigger className="focus:bg-primary dark:focus:bg-secondary text-xl" value="projects">Projects</TabsTrigger>
        </TabsList>
        {/* Labs Tab Content */}
        <TabsContent value="labs">
          {labList.map((lab, index) => (
            <Card className="mb-4" key={index}>
              <CardHeader>
                <CardTitle>{lab.title}</CardTitle>
                <CardDescription>{lab.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
              </CardContent>
              <CardFooter>
                <Button>Prepr Labs</Button>
              </CardFooter>
            </Card>
          ))}
        </TabsContent>

        {/* Challenges Tab Content */}
        <TabsContent value="challenges">
          {challengesList.map((challenge, index) => (
            <Card className="mb-4" key={index}>
              <CardHeader>
                <CardTitle>{challenge.title}</CardTitle>
                <CardDescription>{challenge.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
              </CardContent>
              <CardFooter>
                <Button>Prepr Challenges</Button>
              </CardFooter>
            </Card>
          ))}
        </TabsContent>

        {/* Resources Tab Content */}
        <TabsContent value="resources">
          {resourcesList.map((resources, index) => (
            <Card className="mb-4" key={index}>
              <CardHeader>
                <CardTitle>{resources.title}</CardTitle>
                <CardDescription>{resources.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
              </CardContent>
              <CardFooter>
                <Button>Prepr Resources</Button>
              </CardFooter>
            </Card>
          ))}
        </TabsContent>

        {/* Projects Tab Content */}
        <TabsContent value="projects">
          {projectsList.map((projects, index) => (
            <Card className="mb-4" key={index}>
              <CardHeader>
                <CardTitle>{projects.title}</CardTitle>
                <CardDescription>{projects.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
              </CardContent>
              <CardFooter>
                <Button>Prepr Projects</Button>
              </CardFooter>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Content;
