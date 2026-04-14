import { Injectable } from '@nestjs/common';

@Injectable()
export class CourseService {
    getAllCourses() {
        return "This is a list of all courses.";
    }

    getCourseById(id: number) {
        return `This is the course with ID: ${id}`;
    }

    createCourse() {
        return "Course created successfully.";
    }

    updateCourse(id: number) {
        return `Course with ID: ${id} updated successfully.`;
    }
    patchCourse(id: number) {
        return `Course with ID: ${id} patched successfully.`;
    }
    deleteCourse(id: number) {
        return `Course with ID: ${id} deleted successfully.`;
    }
}
